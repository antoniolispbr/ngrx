import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "../../models/usuario.model";
import * as fromUsuariosAction from "../usuarios/usuarios.action"


export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null,
  error: string | ''
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: ''
}

const _usuariosReducer= createReducer(
  initialState,
  on(fromUsuariosAction.loadUsuariosSucess,(state, {payload})=> ({...state, usuarios: payload, error: ''})),
  on(fromUsuariosAction.loadUsuariosFail,(state, {error})=> ({...state, error: error})),

  on(fromUsuariosAction.loadUsuarioSucess,(state, {payload})=> ({...state, usuario: payload, error: ''})),
  on(fromUsuariosAction.loadUsuarioFail,(state, {error})=> ({...state, error: error})),

  on(fromUsuariosAction.createUsuarioSucess,(state, {payload})=> ({...state, usuarios: [...state.usuarios, payload], error: ''})),
  on(fromUsuariosAction.createUsuarioFail,(state, {error})=> ({...state, error: error})),

  on(fromUsuariosAction.updateUsuarioSucess,(state, {payload})=> ({
    ...state,
    usuarios: [...state.usuarios].map((row)=> {
      if(row.id == payload.id){
        return payload;
      } else {
        return row;
      }
    }),
    error: ''
  })),
  on(fromUsuariosAction.updateUsuarioFail,(state, {error})=> ({...state, error: error})),

  on(fromUsuariosAction.deleteUsuarioSucess,(state, {payload})=> ({
    ...state,
    usuarios: [...state.usuarios].filter((filter)=> filter.id != payload),
    error: ''
  })),
  on(fromUsuariosAction.deleteUsuarioFail,(state, {error})=> ({...state, error: error})),
)

export function usuariosReducer(state = initialState, action: Action){
  return _usuariosReducer(state, action)
}

const getUsuariosFeatureState = createFeatureSelector<UsuariosState>('usuarios')

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios
)

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuario
)

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.error
)

export const getUsuariosAdministradores = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios.filter((filter) => filter.perfil == 'Administradores')
)

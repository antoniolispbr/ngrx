import { UsuarioModel } from '../../models/usuario.model';
import { createAction, props } from "@ngrx/store";

export const enum usuariosTypeAction {
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',

}

//Load Usuários
export const loadUsuarios = createAction(
  usuariosTypeAction.LOAD_USUARIOS
);

export const loadUsuariosSucess = createAction(
  usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
)

export const loadUsuariosFail = createAction(
  usuariosTypeAction.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
)

//Load Usuário
export const loadUsuario = createAction(
  usuariosTypeAction.LOAD_USUARIO,
  props<{ payload: number }>()
);

export const loadUsuarioSucess = createAction(
  usuariosTypeAction.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
)

export const loadUsuarioFail = createAction(
  usuariosTypeAction.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
)

//Create Usuário
export const createUsuario = createAction(
  usuariosTypeAction.CREATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const createUsuarioSucess = createAction(
  usuariosTypeAction.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
)

export const createUsuarioFail = createAction(
  usuariosTypeAction.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
)

//Update Usuários
export const updateUsuario = createAction(
  usuariosTypeAction.UPDATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const updateUsuarioSucess = createAction(
  usuariosTypeAction.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
)

export const updateUsuarioFail = createAction(
  usuariosTypeAction.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
)

//delete Usuários
export const deleteUsuario = createAction(
  usuariosTypeAction.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const deleteUsuarioSucess = createAction(
  usuariosTypeAction.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
)

export const deleteUsuarioFail = createAction(
  usuariosTypeAction.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
)

import { createReducer, on, Action } from "@ngrx/store";
import { showListarUsuarios, showCadastroUsuarios, showListaUsuariosAdmin } from "./view-component.action";

export interface ViewComponentState {
  view: 'listar' | 'cadastro' | 'consulta';
}

export const initialState: ViewComponentState = {
  view: 'listar'
};

const _viewComponentReducer = createReducer(
  initialState,
  on(showListarUsuarios, (state): ViewComponentState => ({ ...state, view: 'listar' })),
  on(showCadastroUsuarios, (state): ViewComponentState => ({ ...state, view: 'cadastro' })),
  on(showListaUsuariosAdmin, (state): ViewComponentState => ({ ...state, view: 'consulta' }))
);

export function viewComponentReducer(state: ViewComponentState | undefined, action: Action) {
  return _viewComponentReducer(state, action);
}


import { ActionReducerMap } from "@ngrx/store";
import { UsuariosState, usuariosReducer } from "./usuarios/usuarios.reducer";
import { UsuariosEffects } from "./usuarios/usuarios.effects";
import { ViewComponentState, viewComponentReducer } from "./view-component/view-component.reducer";



export interface AppState {
  usuarios: UsuariosState,
  viewComponent: ViewComponentState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: usuariosReducer,
  viewComponent: viewComponentReducer
}

export const appEffects = [
  UsuariosEffects
]

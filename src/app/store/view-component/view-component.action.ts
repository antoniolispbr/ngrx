import { createAction } from "@ngrx/store";

export const enum ViewComponentActionTypes {
  SHOW_LISTAR_USUARIOS = '[View Component] Show Listar Usuarios',
  SHOW_CADASTRO_USUARIOS = '[View Component] Show Cadastro Usuarios',
  SHOW_LISTA_USUARIOS_ADMIN = '[View Component] Show Lista Usuarios Admin'
}

export const showListarUsuarios = createAction(ViewComponentActionTypes.SHOW_LISTAR_USUARIOS);
export const showCadastroUsuarios = createAction(ViewComponentActionTypes.SHOW_CADASTRO_USUARIOS);
export const showListaUsuariosAdmin = createAction(ViewComponentActionTypes.SHOW_LISTA_USUARIOS_ADMIN);

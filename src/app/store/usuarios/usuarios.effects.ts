import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsuarioSevice } from "../../service/usuario.service";
import * as fromUsuariosAction from "./usuarios.action"
import { catchError, exhaustMap, map, of } from 'rxjs';



@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioSevice
  ) { }

  loadUsuarios$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIOS),
        exhaustMap(() => this.usuariosService.getUsuarios()
          .pipe(
            map(payload =>
              fromUsuariosAction.loadUsuariosSucess({ payload }),
              catchError(error => of(fromUsuariosAction.loadUsuariosFail({ error })))
            )
          )
        )
      )
  )

  loadUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIO),
        exhaustMap((record: any) => this.usuariosService.getUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.loadUsuarioSucess({ payload }),
              catchError(error => of(fromUsuariosAction.loadUsuarioFail({ error })))
            )
          )
        )
      )
  )

  createUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuariosTypeAction.CREATE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.addUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.createUsuarioSucess({ payload }),
              catchError(error => of(fromUsuariosAction.createUsuarioFail({ error })))
            )
          )
        )
      )
  )

  updateUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuariosTypeAction.UPDATE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.updateUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.updateUsuarioSucess({ payload }),
              catchError(error => of(fromUsuariosAction.updateUsuarioFail({ error })))
            )
          )
        )
      )
  )

  deleteUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosAction.usuariosTypeAction.DELETE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.deleteUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosAction.deleteUsuarioSucess({ payload: record.payload }),
              catchError(error => of(fromUsuariosAction.deleteUsuarioFail({ error })))
            )
          )
        )
      )
  )

}

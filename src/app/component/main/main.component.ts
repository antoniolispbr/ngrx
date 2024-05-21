import { Component } from '@angular/core';
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';
import { CadastroUsuariosComponent } from '../cadastro-usuarios/cadastro-usuarios.component';
import { Store, StoreModule, select } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListaUsuariosAdminComponent } from '../lista-usuarios-admin/lista-usuarios-admin.component';
import { CommonModule, NgIf } from '@angular/common';
import { AppState } from '../../store/app-state';
import { Observable } from 'rxjs';
import { showListarUsuarios, showCadastroUsuarios, showListaUsuariosAdmin } from '../../store/view-component/view-component.action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ListarUsuariosComponent,
    CadastroUsuariosComponent,
    ListaUsuariosAdminComponent,
    CommonModule,
    NgIf,
    FormsModule,
  ],
  providers:[HttpClientModule, StoreModule, StoreDevtoolsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  view$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.view$ = store.pipe(select(state => state.viewComponent.view));
  }

  mostrarLista() {
    this.store.dispatch(showListarUsuarios());
  }

  mostrarCadastro() {
    this.store.dispatch(showCadastroUsuarios());
  }

  mostrarConsulta() {
    this.store.dispatch(showListaUsuariosAdmin());
  }

}

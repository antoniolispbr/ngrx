import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../models/usuario.model';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromUsuariosAction from '../../store/usuarios/usuarios.action'
import * as fromUsuariosSelector from '../../store/usuarios/usuarios.reducer'
import { AppState } from '../../store/app-state';

@Component({
  selector: 'app-lista-usuarios-admin',
  standalone: true,
  imports: [NgFor,CommonModule, FormsModule],
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrl: './lista-usuarios-admin.component.css'
})
export class ListaUsuariosAdminComponent {
  @Output() listarEvent = new EventEmitter<void>();
  @Output() cadastrarEvent = new EventEmitter<void>();

  constructor(private store: Store<AppState>){}

  listaUsuarios$ : Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradores);



  onListar() {
    this.listarEvent.emit();
  }

  onCadastrar() {
    this.cadastrarEvent.emit();
  }

}

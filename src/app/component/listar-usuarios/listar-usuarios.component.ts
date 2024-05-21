import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModel } from '../../models/usuario.model';
import { NgFor } from '@angular/common';
import { AppState } from '../../store/app-state';
import * as fromUsuariosAction from '../../store/usuarios/usuarios.action'
import * as fromUsuariosSelector from '../../store/usuarios/usuarios.reducer'
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [NgFor,CommonModule, FormsModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent implements OnInit{
  @Output() cadastrarEvent = new EventEmitter<void>();
  @Output() consultarEvent = new EventEmitter<void>();
  f: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: ''};
  //listaUsuarios: UsuarioModel[] = [];
  listaUsuarios$ : Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);
  usuario$ : Observable<UsuarioModel | null> = this.store.select(fromUsuariosSelector.getUsuario);

  constructor(
    private store: Store<AppState>,
    private injector: Injector
  ){ }

  ngOnInit() {
    this.store.dispatch(fromUsuariosAction.loadUsuarios())
  }

  editar(id: number) {
    this.store.dispatch(fromUsuariosAction.loadUsuario({payload: id}));
  }

  deletar(id: number) {
    this.store.dispatch(fromUsuariosAction.deleteUsuario({payload: id}))
  }

  salvarAlteracoes(form: NgForm) {
    const usuarioAtualizado: UsuarioModel = form.value;
    this.store.dispatch(fromUsuariosAction.updateUsuario({ payload: usuarioAtualizado }));
  }

  onCadastrar() {
    this.cadastrarEvent.emit();
  }

  onConsultar() {
    this.consultarEvent.emit();
  }

}

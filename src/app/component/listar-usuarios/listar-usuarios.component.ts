import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModel } from '../../models/usuario.model';
import { NgFor } from '@angular/common';
import { AppState } from '../../store/app-state';
import * as fromUsuariosAction from '../../store/usuarios/usuarios.action'
import { Store, StoreModule } from '@ngrx/store';



@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [NgFor,CommonModule],
  providers:[StoreModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent implements OnInit{
  listaUsuarios: UsuarioModel[] = [];

  constructor(
    private store: Store<AppState>,
    private injector: Injector
  ){ }

  ngOnInit() {
    this.store.dispatch(fromUsuariosAction.loadUsuarios())

    // this.usuariosService.getUsuarios().subscribe((usuarios: UsuarioModel[])=>{
    //   this.listaUsuarios = usuarios;
    // })
  }

}

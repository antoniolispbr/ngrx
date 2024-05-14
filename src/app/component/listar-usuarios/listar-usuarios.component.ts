import { Component, OnInit } from '@angular/core';
import { UsuarioSevice } from '../../service/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent implements OnInit{
  listaUsuarios: UsuarioModel[] = []
  constructor(private usuariosService: UsuarioSevice ){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuariosService.getUsuarios().subscribe((usuarios: UsuarioModel[])=>{
      this.listaUsuarios = usuarios;
    })
  }

}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class UsuarioSevice {

  constructor(private http: HttpClient){}


  getUsuarios(){
   return this.http.get<UsuarioModel[]>('http://localhost:3000/Usuarios');
  };

  getUsuario(id: number){
    return this.http.get<UsuarioModel>('http://localhost:3000/Usuarios' + id);
  };

  addUsuario(record: UsuarioModel){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<UsuarioModel>('http://localhost:3000/Usuarios', JSON.stringify(record),{headers: headers} )
  };

  updateUsuario(record: UsuarioModel){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<UsuarioModel>('http://localhost:3000/Usuarios' + record.id, JSON.stringify(record),{headers: headers} )
  };

  deleteUsuario(id: number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<UsuarioModel>('http://localhost:3000/Usuarios' + id, {headers: headers} )
  };
}

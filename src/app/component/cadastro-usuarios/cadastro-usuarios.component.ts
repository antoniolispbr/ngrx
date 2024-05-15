import { Component } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioSevice } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-usuarios',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './cadastro-usuarios.component.html',
  styleUrl: './cadastro-usuarios.component.css'
})
export class CadastroUsuariosComponent {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: ''};

  constructor(private usuarioService: UsuarioSevice){}

  addUsuario(){
    if(this.model.id == 0){
      //cadastra
      this.usuarioService.addUsuario(this.model).subscribe();
    }else {
      //atualizar
    }
  }

}

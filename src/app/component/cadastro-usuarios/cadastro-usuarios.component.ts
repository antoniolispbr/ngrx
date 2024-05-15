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

  async addUsuario() {
    // Buscar todos os usuários para determinar o ID mais alto
    const usuarios = await this.usuarioService.getUsuarios().toPromise();

    // Encontrar o ID mais alto (lidar com array potencialmente vazio)
    let highestId = 0;
    if (usuarios && usuarios.length > 0) {
      highestId = Math.max(...usuarios.map(usuario => usuario.id));
    }

    // Gerar o novo ID
    this.model.id = highestId + 1;

    // Chamar o método de serviço addUsuario
    this.usuarioService.addUsuario(this.model).subscribe();
  }

}

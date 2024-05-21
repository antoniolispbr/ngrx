import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioSevice } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import * as fromUsuariosAction from '../../store/usuarios/usuarios.action'
import { AppState } from '../../store/app-state';


@Component({
  selector: 'app-cadastro-usuarios',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './cadastro-usuarios.component.html',
  styleUrl: './cadastro-usuarios.component.css'
})
export class CadastroUsuariosComponent {
  @Output() listarEvent = new EventEmitter<void>();
  @Output() consultarEvent = new EventEmitter<void>();
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: ''};


  constructor(
    private usuarioService: UsuarioSevice,
    private store: Store<AppState>
  ){}

  async addUsuario(){
    if (this.model.id == 0){
      console.log('cadastra', this.model)
      this.addFinalUsuario()
    }else {
      // atualizar
      console.log('atualizar', this.model)
      this.store.dispatch(fromUsuariosAction.updateUsuario({payload:this.model}));
    }
  }

  async addFinalUsuario() {
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
    //this.usuarioService.addUsuario(this.model).subscribe();
    this.store.dispatch(fromUsuariosAction.createUsuario({payload:this.model}));
  }

  onListar() {
    this.listarEvent.emit();
  }

  onConsultar() {
    this.consultarEvent.emit();
  }

}

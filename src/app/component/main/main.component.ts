import { Component } from '@angular/core';
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';
import { CadastroUsuariosComponent } from '../cadastro-usuarios/cadastro-usuarios.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListarUsuariosComponent, CadastroUsuariosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

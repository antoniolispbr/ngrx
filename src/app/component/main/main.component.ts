import { Component } from '@angular/core';
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListarUsuariosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

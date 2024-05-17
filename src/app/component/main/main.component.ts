import { Component } from '@angular/core';
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';
import { CadastroUsuariosComponent } from '../cadastro-usuarios/cadastro-usuarios.component';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ListarUsuariosComponent,
    CadastroUsuariosComponent
  ],
  providers:[HttpClientModule, StoreModule, StoreDevtoolsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private store: Store) { }
}

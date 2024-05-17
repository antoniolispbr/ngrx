import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, ],
  providers:[HttpClientModule, StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Para navegação
import { HomeComponent } from './pages/home/home.component';  // Importando HomeComponent (standalone)

@Component({
  selector: 'app-root',
  standalone: true,  // Tornando o AppComponent standalone
  imports: [RouterOutlet, HomeComponent],  // Importando outros componentes diretamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'buzzfeed-project';
}

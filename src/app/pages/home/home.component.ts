import { Component } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';  // Importando QuizComponent

@Component({
  selector: 'app-home',
  standalone: true,  // Tornando o HomeComponent standalone
  imports: [QuizzComponent],  // Importando o QuizComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}

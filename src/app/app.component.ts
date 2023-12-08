import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MultiCasePickerComponent} from "./components/multi-case-picker/multi-case-picker.component";
import {DeterminerQuizComponent} from "./components/determiner-quiz/determiner-quiz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MultiCasePickerComponent, DeterminerQuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ErkennungUI';
}

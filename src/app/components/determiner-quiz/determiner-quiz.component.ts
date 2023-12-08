import { Component } from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DeterminerType} from "../../model/grammar-constants/determiner-type";
import {MultiCasePickerComponent} from "../multi-case-picker/multi-case-picker.component";
import {MultiGenderPickerComponent} from "../multi-gender-picker/multi-gender-picker.component";
import {MultiNumberPickerComponent} from "../multi-number-picker/multi-number-picker.component";

@Component({
  selector: 'app-determiner-quiz',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MultiCasePickerComponent,
    MultiGenderPickerComponent,
    MultiNumberPickerComponent
  ],
  templateUrl: './determiner-quiz.component.html',
  styleUrl: './determiner-quiz.component.css'
})
export class DeterminerQuizComponent {

  protected readonly DeterminerType = DeterminerType;
  protected readonly Object = Object;

}

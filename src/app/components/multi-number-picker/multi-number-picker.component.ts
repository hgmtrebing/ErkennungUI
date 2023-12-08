import {Component} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Number} from "../../model/grammar-constants/number";

@Component({
  selector: 'app-multi-number-picker',
  standalone: true,
    imports: [
      MatCheckboxModule,
      ReactiveFormsModule
    ],
  templateUrl: './multi-number-picker.component.html',
  styleUrl: './multi-number-picker.component.css'
})
export class MultiNumberPickerComponent {
  singularSelected: FormControl<boolean|null> = new FormControl(true);
  pluralSelected: FormControl<boolean|null> = new FormControl(true);

  constructor() { }

  public getSelections(): Number[] {
    let numbers: Number[] = [];

    if (this.singularSelected.value) {
      numbers.push(Number.SINGULAR);
    }

    if (this.pluralSelected.value) {
      numbers.push(Number.PLURAL);
    }

    return numbers;
  }
}

import {Component} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Gender} from "../../model/grammar-constants/gender";

@Component({
  selector: 'app-multi-gender-picker',
  standalone: true,
    imports: [
      MatCheckboxModule,
      ReactiveFormsModule
    ],
  templateUrl: './multi-gender-picker.component.html',
  styleUrl: './multi-gender-picker.component.css'
})
export class MultiGenderPickerComponent {
  masculineSelected: FormControl<boolean|null> = new FormControl(true);
  feminineSelected: FormControl<boolean|null> = new FormControl(true);
  neuterSelected: FormControl<boolean|null> = new FormControl(true);

  constructor() { }

  public getSelections(): Gender[] {
    var genders: Gender[] = [];

    if (this.masculineSelected.value) {
      genders.push(Gender.MASCULINE);
    }

    if (this.feminineSelected.value) {
      genders.push(Gender.FEMININE);
    }

    if (this.neuterSelected.value) {
      genders.push(Gender.NEUTER);
    }

    return genders;
  }
}

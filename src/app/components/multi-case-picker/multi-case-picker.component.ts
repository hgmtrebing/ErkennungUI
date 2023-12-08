import { Component } from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Case} from "../../model/grammar-constants/case";

@Component({
  selector: 'app-multi-case-picker',
  standalone: true,
  imports: [
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './multi-case-picker.component.html',
  styleUrl: './multi-case-picker.component.css'
})
export class MultiCasePickerComponent {
  nominativeSelected: FormControl<boolean|null> = new FormControl(true);
  accusativeSelected: FormControl<boolean|null> = new FormControl(true);
  dativeSelected: FormControl<boolean|null> = new FormControl(true);
  genitiveSelected: FormControl<boolean|null> = new FormControl(true);

  constructor() { }

  public getSelections(): Case[] {
    var cases: Case[] = [];

    if (this.nominativeSelected.value) {
      cases.push(Case.NOMINATIVE);
    }

    if (this.accusativeSelected.value) {
      cases.push(Case.ACCUSATIVE);
    }

    if (this.dativeSelected.value) {
      cases.push(Case.DATIVE);
    }

    if (this.genitiveSelected.value) {
      cases.push(Case.GENITIVE);
    }

    return cases;
  }

}

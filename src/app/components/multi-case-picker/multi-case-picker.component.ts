import { Component } from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

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

  public isNominativeSelected(): boolean|null {
    return this.nominativeSelected.getRawValue();
  }
}

import { Component } from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DeterminerType} from "../../model/grammar-constants/determiner-type";
import {Number} from "../../model/grammar-constants/number";
import {NgForOf} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Gender} from "../../model/grammar-constants/gender";
import {Case} from "../../model/grammar-constants/case";
import {DeterminerService} from "../../services/determiner-service/determiner.service";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {DeterminerForm} from "../../model/determiner-form";

@Component({
  selector: 'app-determiner-quiz',
  standalone: true,
  imports: [
    MatCheckboxModule,
    NgForOf,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './determiner-quiz.component.html',
  styleUrl: './determiner-quiz.component.css'
})
export class DeterminerQuizComponent {

  public readonly numberCheckboxes = [
    {label: "Singular", value: Number.SINGULAR, control: new FormControl<boolean>(true)},
    {label: "Plural", value: Number.PLURAL, control: new FormControl<boolean>(true)}
  ];

  public readonly genderCheckboxes = [
    {label: "Masculine", value: Gender.MASCULINE, control: new FormControl<boolean>(true)},
    {label: "Feminine", value: Gender.FEMININE, control: new FormControl<boolean>(true)},
    {label: "Neuter", value: Gender.NEUTER, control: new FormControl<boolean>(true)},
  ];

  public readonly casesCheckboxes = [
    {label: "Nominative", value: Case.NOMINATIVE, control: new FormControl<boolean>(true)},
    {label: "Accusative", value: Case.ACCUSATIVE, control: new FormControl<boolean>(true)},
    {label: "Dative", value: Case.DATIVE, control: new FormControl<boolean>(true)},
    {label: "Genitive", value: Case.GENITIVE, control: new FormControl<boolean>(true)},
  ];

  public readonly typesCheckboxes = [
    {label: "Definite Article", value: DeterminerType.DEFINITE_ARTICLE, control: new FormControl<boolean>(true)}
  ];

  public determiners: DeterminerForm[] = [];
  public currentDeterminer: number = 0;

  public currentNumber: Number | null        = null;
  public currentGender: Gender | null        = null;
  public currentCase: Case | null            = null;
  public currentType: DeterminerType | null  = null;
  public currentForm: string | null          = null;

  public userGuess: FormControl<string | null> = new FormControl<string>("");

  constructor(private readonly determinerService: DeterminerService) {
    this.recomputeSelections();
    this.getNextDeterminer();
  }

  onSelectionChange(): void {
    this.recomputeSelections();
  }

  recomputeSelections(): void {

    let allowedNumbers: Number[] = [];
    let allowedGenders: Gender[] = [];
    let allowedCases: Case[] = [];
    let allowedTypes: DeterminerType[] = [];


    for (let number of this.numberCheckboxes) {
      if (number.control.value) {
        allowedNumbers.push(number.value);
      }
    }

    for (let gender of this.genderCheckboxes) {
      if (gender.control.value) {
        allowedGenders.push(gender.value);
      }
    }

    for (let caze of this.casesCheckboxes) {
      if (caze.control.value) {
        allowedCases.push(caze.value);
      }
    }

    for (let type of this.typesCheckboxes) {
      if (type.control.value) {
        allowedTypes.push(type.value);
      }
    }

    this.currentDeterminer = 0;
    this.determiners = this.determinerService.filter(allowedGenders, allowedCases, allowedNumbers, allowedTypes);

    for (let i = 0; i < (this.determiners.length * 10); i++) {
      let index01 = i % 10;
      let index02 = Math.floor(Math.random()* this.determiners.length);

      let swap = this.determiners[index01];
      this.determiners[index01] = this.determiners[index02];
      this.determiners[index02] = swap;

    }


  }

  getNextDeterminer(): void {

    if (this.determiners.length <= 0) {
      // This is an error condition; log an error message of some kind
      return;
    }

    let determiner = this.determiners[this.currentDeterminer++];

    if (this.currentDeterminer >= this.determiners.length) {
      this.currentDeterminer = 0;
    }

    this.currentCase = determiner.caze;
    this.currentType = determiner.type;
    this.currentGender = determiner.gender;
    this.currentNumber = determiner.number;
    this.currentForm = determiner.germanForm;
  }

  checkAnswer(): void {
    if (this.userGuess.value == this.currentForm) {
      alert("Correct!!");
    } else {
      alert("Incorrect! The correct form is: " + this.currentForm);
    }

    this.getNextDeterminer();
  }
}

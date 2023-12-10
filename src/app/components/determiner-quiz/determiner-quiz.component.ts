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

  private allowedNumbers: Number[] = [];
  private allowedGenders: Gender[] = [];
  private allowedCases: Case[] = [];
  private allowedTypes: DeterminerType[] = [];

  public currentNumber: Number | null        = null;
  public currentGender: Gender | null        = null;
  public currentCase: Case | null            = null;
  public currentType: DeterminerType | null  = null;
  public currentForm: string | null          = null;

  public userGuess: FormControl<string | null> = new FormControl<string>("");

  constructor(private readonly determinerService: DeterminerService) {
    this.getNextDeterminer();
  }

  onSelectionChange(): void {
    this.recomputeSelections();
  }

  recomputeSelections(): void {

    // Reset all the Requested Parameters, since we are about to recompute them.
    this.allowedNumbers = [];
    this.allowedGenders = [];
    this.allowedCases = [];
    this.allowedTypes = [];

    for (let number of this.numberCheckboxes) {
      if (number.control.value) {
        this.allowedNumbers.push(number.value);
      }
    }

    for (let gender of this.genderCheckboxes) {
      if (gender.control.value) {
        this.allowedGenders.push(gender.value);
      }
    }

    for (let caze of this.casesCheckboxes) {
      if (caze.control.value) {
        this.allowedCases.push(caze.value);
      }
    }

    for (let type of this.typesCheckboxes) {
      if (type.control.value) {
        this.allowedTypes.push(type.value);
      }
    }
  }

  getNextDeterminer(): void {
    let determiners = this.determinerService.filter(this.allowedGenders, this.allowedCases, this.allowedNumbers, this.allowedTypes);
    let determiner = determiners[ Math.floor((Math.random()*500) % determiners.length)];

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

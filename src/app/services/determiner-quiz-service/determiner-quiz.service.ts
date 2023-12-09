import {Injectable} from '@angular/core';
import {DeterminerService} from "../determiner-service/determiner.service";
import {Case} from "../../model/grammar-constants/case";
import {Gender} from "../../model/grammar-constants/gender";
import {Number} from "../../model/grammar-constants/number";
import {DeterminerType} from "../../model/grammar-constants/determiner-type";

@Injectable({
  providedIn: 'root'
})
export class DeterminerQuizService {

  private _cases: Case[] = [];
  private _genders: Gender[] = [];
  private _numbers: Number[] = [];

  private _answerCase: Case | undefined;
  private _answerGender: Gender | undefined;
  private _answerNumber: Number | undefined;
  private _answerType: DeterminerType | undefined;
  private _answerForm: string | undefined;

  constructor(private readonly determinerService: DeterminerService) { }

  get cases(): Case[] {
    return this._cases;
  }

  set cases(value: Case[]) {
    this._cases = value;
  }

  get genders(): Gender[] {
    return this._genders;
  }

  set genders(value: Gender[]) {
    this._genders = value;
  }

  get numbers(): Number[] {
    return this._numbers;
  }

  set numbers(value: Number[]) {
    this._numbers = value;
  }

  get answerCase(): Case | undefined {
    return this._answerCase;
  }

  get answerGender(): Gender | undefined {
    return this._answerGender;
  }

  get answerNumber(): Number | undefined{
    return this._answerNumber;
  }

  get answerType(): DeterminerType | undefined{
    return this._answerType;
  }

  get answerForm(): string | undefined {
    return this._answerForm;
  }

  public check(): void {

  }

  public nextQuestion():void {
    let determinerForms = this.determinerService.filter(this.genders, this.cases, this.numbers, [DeterminerType.DEFINITE_ARTICLE]);
    let index = (Math.random() * 1000) % determinerForms.length;

    this._answerCase = determinerForms[index].caze;
    this._answerGender = determinerForms[index].gender;
    this._answerNumber = determinerForms[index].number;
    this._answerType = determinerForms[index].type;
    this._answerForm = determinerForms[index].germanForm;

  }
}

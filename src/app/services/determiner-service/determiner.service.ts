import {Injectable} from '@angular/core';
import {DeterminerForm} from "../../model/determiner-form";
import {Gender} from "../../model/gender";
import {Number} from "../../model/number";
import {Case} from "../../model/case";
import {DeterminerType} from "../../model/determiner-type";


@Injectable({
  providedIn: 'root'
})
export class DeterminerService {

  public readonly determiners: DeterminerForm[] = [];

  constructor() {
    this.initialize();
  }

  public filter(genders: Gender[], cases: Case[], numbers: Number[], types: DeterminerType[]): void {
    this.determiners.filter((form: DeterminerForm) => {
      let returnVal: boolean;
      returnVal = genders == null || genders.length < 1 || genders.includes(form.gender);
      returnVal = returnVal && (cases == null || cases.length < 1 || cases.includes(form.caze));
      returnVal = returnVal && (numbers == null || numbers.length < 1 || numbers.includes(form.number));
      returnVal = returnVal && (types == null || types.length < 1 || types.includes(form.type));

      return returnVal;
    });
  }

  private initialize(): void {

    this.initializeDefiniteArticles();
  }

  /**
   * Initialize list of German Definite Articles.
   * @private
   */
  private initializeDefiniteArticles(): void {
    this.determiners.push(
      new DeterminerForm(Gender.MASCULINE, Case.NOMINATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "der"),
      new DeterminerForm(Gender.MASCULINE, Case.ACCUSATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "den"),
      new DeterminerForm(Gender.MASCULINE, Case.DATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "dem"),
      new DeterminerForm(Gender.MASCULINE, Case.GENITIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "des"),

      new DeterminerForm(Gender.FEMININE, Case.NOMINATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.FEMININE, Case.ACCUSATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.FEMININE, Case.DATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "der"),
      new DeterminerForm(Gender.FEMININE, Case.GENITIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "der"),

      new DeterminerForm(Gender.NEUTER, Case.NOMINATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "das"),
      new DeterminerForm(Gender.NEUTER, Case.ACCUSATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "das"),
      new DeterminerForm(Gender.NEUTER, Case.DATIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "dem"),
      new DeterminerForm(Gender.NEUTER, Case.GENITIVE, Number.SINGULAR, DeterminerType.DEFINITE_ARTICLE, "des"),

      new DeterminerForm(Gender.MASCULINE, Case.NOMINATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.MASCULINE, Case.ACCUSATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.MASCULINE, Case.DATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "den"),
      new DeterminerForm(Gender.MASCULINE, Case.GENITIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "der"),

      new DeterminerForm(Gender.FEMININE, Case.NOMINATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.FEMININE, Case.ACCUSATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.FEMININE, Case.DATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "den"),
      new DeterminerForm(Gender.FEMININE, Case.GENITIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "der"),

      new DeterminerForm(Gender.NEUTER, Case.NOMINATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.NEUTER, Case.ACCUSATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "die"),
      new DeterminerForm(Gender.NEUTER, Case.DATIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "den"),
      new DeterminerForm(Gender.NEUTER, Case.GENITIVE, Number.PLURAL, DeterminerType.DEFINITE_ARTICLE, "der")
    );
  }
}

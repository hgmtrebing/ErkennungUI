import {Gender} from "./gender";
import {Case} from "./case";
import {Number} from "./number";
import {DeterminerType} from "./determiner-type";

export class DeterminerForm {

  /**
   *
   * @param gender
   * @param caze
   * @param number
   * @param type
   * @param germanForm
   */
  constructor(
    public readonly gender: Gender,
    public readonly caze: Case,
    public readonly number: Number,
    public readonly type: DeterminerType,
    public readonly germanForm: string
  ) {}
}

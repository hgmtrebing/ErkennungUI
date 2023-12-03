import {Gender} from "./grammar-constants/gender";
import {Case} from "./grammar-constants/case";
import {Number} from "./grammar-constants/number";
import {DeterminerType} from "./grammar-constants/determiner-type";

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

import { AbstractControl } from '@angular/forms';
import * as data from '../constants/data.json';
export function restrictedValidator(control: AbstractControl) {
  let value = control.value;
  if (value && data.default.shopNames.map(el=>el.toLowerCase()).indexOf(value.toLowerCase())>-1 ) {
    return {
        restrictedName: {
          name: "Matches Existing Record !"
        }
      }

  }
  return null;
}

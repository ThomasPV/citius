import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive,  Input } from '@angular/core';
import * as data from '../constants/data.json';

@Directive({
  selector: '[restrictedValidatorTD]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TDRestrictedValidatorDirective, multi: true }
  ]
})
export class TDRestrictedValidatorDirective implements Validator {

  validate(control: FormControl) {
    console.log(control.value)
    let value = control.value;
    if (!!value && data.default.shopNames.map(el=>el.toLowerCase()).indexOf(value.toLowerCase())>-1 ) {
      return {
          restrictedName:true,
          error: "Matches Existing Record !"
        }

    }
    return null;
  }

}

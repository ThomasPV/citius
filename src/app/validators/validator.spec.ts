import { FormControl } from '@angular/forms';
import { restrictedValidator } from "./restricted-validator.validator";

describe('Testing Custom Validator',()=>{

it('Test Success Case',()=>{

expect(restrictedValidator(new FormControl('Jalaram'))).toEqual(null)
});
it('Test Fail Case',()=>{

  expect(restrictedValidator(new FormControl('bikaner'))).toEqual({
    restrictedName: {
      name: "Matches Existing Record !"
    }
  })
  })
});

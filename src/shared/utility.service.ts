import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Injectable({providedIn:'root'})
export class UtilityService {
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control.controls) { // control is a FormGroup
        this.markFormGroupTouched(control);
      } else { // control is a FormControl
        control.markAsTouched();
      }
    });
   }
}

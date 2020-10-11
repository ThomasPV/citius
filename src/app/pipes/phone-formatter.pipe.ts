import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber } from 'libphonenumber-js';
@Pipe({
  name: 'citiusPhone'
})

export class PhoneFormatterPipe implements PipeTransform {
  transform(value: number | string, ...args: any[]): string {
    const stringPhone = value + '';
    const phoneNumber = parsePhoneNumber(stringPhone, args[0] ||'US');
    const formatted = phoneNumber.formatNational();
    return formatted;
  }
}

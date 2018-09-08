import {ValidatorFn,AbstractControl} from '@angular/forms';
import * as moment from 'moment';

export function customDateValidator(control:AbstractControl): {[key:string]:any}|null{
  if (control.value=='') return null;
  const dateValid= moment(control.value,"MM-DD-YYYY",true).isValid()
  return dateValid ? null : {'dateString':{value:control.value}}
}

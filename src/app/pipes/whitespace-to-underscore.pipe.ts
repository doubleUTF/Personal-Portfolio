import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'WhitespaceToUnderscore'})
export class WhitespaceToUnderscorePipe implements PipeTransform {
  transform(value:string, reverse?:boolean):string{
    if (!reverse){
      return value.replace(/\s/,'_')
    } else {
      return value.replace(/_/,' ')
    }
  }
}

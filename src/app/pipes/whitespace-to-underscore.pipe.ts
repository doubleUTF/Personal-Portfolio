import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'WhitespaceToUnderscore'})
export class WhitespaceToUnderscorePipe implements PipeTransform {
  transform(value:string):string{
    return value.replace(/\s/,'_')
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, cutoff: number): any {
    if (value.length>cutoff-3){
      return value.slice(0,cutoff).concat('...');
    } else return value;
  }
}

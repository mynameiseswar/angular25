import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqroot'
})
export class SqrootPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {

    return Math.sqrt(value);
  }

}

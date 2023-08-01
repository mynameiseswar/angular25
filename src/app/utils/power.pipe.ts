import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  pure: true
})
export class PowerPipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    console.log(value);
    console.log(args)
    return Math.pow(value,Number(args[0]));
  }

}



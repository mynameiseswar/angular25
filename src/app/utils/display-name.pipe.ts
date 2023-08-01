import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayName'
})
export class DisplayNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {

    // `${value.sName} ${value.fName} ${value.lName}`
    let returnName = '';
    args[0] = args[0] == undefined ? '' : args[0];
    switch(args[0].toString().toLowerCase()){
      case 'short':
        returnName = `${value.sName} ${value.lName}`;
      break;
      case 'medium':
        returnName = `${value.sName} ${value.fName}`;
        break;
      case 'full':
        returnName = `${value.sName} ${value.fName} ${value.lName}`
        break;
        case 'fname':
          returnName = `${value.fName}`;
          break;
      default:
        returnName = `${value.sName} ${value.fName} ${value.lName}`
        break;
    }

    return returnName;
  }

}

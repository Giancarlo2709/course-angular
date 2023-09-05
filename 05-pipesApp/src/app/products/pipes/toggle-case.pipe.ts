import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

// giancarlo | toggleCase = 'GIANCARLO'
// GIANCARLO | toggleCase = 'giancarlo'

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {
    return toUpper
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}

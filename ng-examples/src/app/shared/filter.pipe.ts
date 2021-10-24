import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, lt?: number): any {
    const filteredValues: any = [];

    if (!lt) {
      return value;
    }

    value.forEach((number: number) => {
      if (number < lt) {
        filteredValues.push(number);
      }
    });

    return filteredValues;
  }
}

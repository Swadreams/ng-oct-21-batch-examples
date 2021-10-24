import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number = 100): unknown {
    return value.slice(0, limit) + '...';
  }
}

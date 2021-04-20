import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkData',
})
export class CheckData implements PipeTransform {
  transform(text: string | string[]): string {
      text = Array.isArray(text) ? text[0]: text;
      return text || 'unspecified';
  }
}

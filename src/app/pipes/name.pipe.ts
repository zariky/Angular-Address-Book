import { Pipe, PipeTransform } from '@angular/core';
import Name from '../model/name.model';

/**
 * Transforms the input Name interface into Full name string in the format:
 * 'Title FirstName LastName'
 */
@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(value: Name): string {
    const { title, first, last } = value;
    return [title, first, last].filter(Boolean).join(' ').trim();
  }
}

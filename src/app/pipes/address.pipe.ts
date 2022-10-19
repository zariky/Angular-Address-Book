import { Pipe, PipeTransform } from '@angular/core';
import Location from '../model/location.model';

/**
 * Transforms the input Address interface into Full Address string in the format:
 * 'streetNumber streetName, City, State, Country, PostCode '
 */
@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(location: Location): string {
    const {
      street: { number, name },
      city,
      state,
      country,
      postcode,
    } = location;
    const street = this.joinSegments([number, name], ' ');
    const address = this.joinSegments([city, state, country, postcode]);
    return this.joinSegments([street, address]);
  }

  private joinSegments(segments: any[], delimiter = ', ') {
    return segments.filter(Boolean).join(delimiter);
  }
}

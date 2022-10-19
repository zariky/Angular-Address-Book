import { AddressPipe } from './address.pipe';
import Location from '../model/location.model';

describe('AddressPipe', () => {
  it('create an instance', () => {
    const pipe = new AddressPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms all segments present', () => {
    const pipe = new AddressPipe();
    const testAddress: Location = {
      street: { number: 111, name: 'TestName' },
      city: 'TestCity',
      state: 'TestState',
      country: 'TestCountry',
      postcode: 'TestPostCode',
      coordinates: {
        latitude: 'TestLatitude',
        longitude: 'TestLongitude',
      },
      timezone: {
        offset: 'TestOffset',
        description: 'TestDescription',
      },
    };
    const result = pipe.transform(testAddress);
    expect(result).toEqual('111 TestName, TestCity, TestState, TestCountry, TestPostCode');
  });
});

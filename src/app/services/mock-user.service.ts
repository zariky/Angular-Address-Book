import { Injectable } from '@angular/core';
import User from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  constructor() {}

  /**
   * Returns the mock User object without API call.
   */
  get mockUser(): User {
    return {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Mikael',
        last: 'Leino',
      },
      location: {
        street: {
          number: 6472,
          name: 'Rautatienkatu',
        },
        city: 'Jämsä',
        state: 'Kainuu',
        country: 'Finland',
        postcode: 66188,
        coordinates: {
          latitude: '-24.1645',
          longitude: '-76.8067',
        },
        timezone: {
          offset: '-6:00',
          description: 'Central Time (US & Canada), Mexico City',
        },
      },
      email: 'mikael.leino@example.com',
      login: {
        uuid: '983aa339-d7c5-4feb-9868-c672455f743e',
        username: 'happyleopard795',
        password: 'lian',
        salt: 'YDXt96TM',
        md5: '05ac89e7e8268a5c45cea5e27313f063',
        sha1: '239090645bb5cc9130f3c1bed438c59f250cc62e',
        sha256: 'd17b4bb4a39f959ca3c8196aeab178036f8c1e172a92d43cff65a5541b7a0b96',
      },
      dob: {
        date: '1968-03-30T01:59:09.935Z',
        age: 54,
      },
      registered: {
        date: '2012-02-27T19:47:27.525Z',
        age: 10,
      },
      phone: '04-339-422',
      cell: '048-759-97-12',
      id: {
        name: 'HETU',
        value: 'NaNNA443undefined',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/16.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/16.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/16.jpg',
      },
      nat: 'FI',
    };
  }
}

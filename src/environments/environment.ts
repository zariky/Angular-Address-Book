// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'https://randomuser.me/api/',
    seed: 'nuvalence',
    results: 10,
  },
  buildGMapUrl: (latitude: string | number, longitude: string | number) =>
    `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4881207.03064723!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1665936987148!5m2!1sru!2sus`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

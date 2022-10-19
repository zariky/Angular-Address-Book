export const environment = {
  production: true,
  api: {
    url: 'https://randomuser.me/api/',
    seed: 'nuvalence',
    results: 10,
  },
  buildGMapUrl: (latitude: string | number, longitude: string | number) =>
    `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4881207.03064723!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1665936987148!5m2!1sru!2sus`,
};

import ApolloClient from 'apollo-boost';

import {STARS, DSOS} from '../assets/db';

const filter = (stars, minRa, maxRa, minDec, maxDec) => {
  return stars.filter(
    star =>
      Number(star.ra) > minRa &&
      Number(star.ra) < maxRa &&
      Number(star.dec) > minDec &&
      Number(star.dec) < maxDec,
  );
};

const client = new ApolloClient({
  resolvers: {
    Query: {
      stars: (_, {minRa, maxRa, minDec, maxDec}) => {
        // console.log('lookup stars', minRa, maxRa, minDec, maxDec);
        const stars = [];
        for (let index = 0; index < 24; index++) {
          // console.log('checking index', index, Math.ceil(maxRa));
          if (Math.floor(minRa) <= index && index <= Math.ceil(maxRa)) {
            // console.log('adding stars for index', index);
            stars.push(...filter(STARS[index], minRa, maxRa, minDec, maxDec));
          }
        }
        return stars;
      },
      dsos: () => {
        // return DSOS;
        return [];
      },
    },
  },
});

client.writeData({
  data: {
    selectedHop: 'M13',
    location: {ra: 0.5, dec: 15, __typename: 'location'},
    view: {fov: 2, magLimit: 12, __typename: 'view'},
  },
});

export default client;

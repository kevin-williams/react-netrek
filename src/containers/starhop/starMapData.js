import { http } from 'http';
import axios from 'axios';

export function loadStars(starQuery) {
  const { raFrom, decFrom, raTo, decTo, magLimit } = starQuery;

  return new Promise(function(resolve, reject) {
    // console.log('Loading star db from url');

    try {
      axios
        .get('db/hygfull.json')
        .then(response => {
          // console.log('got response', response);
          const stars = response.data.stars.filter(starEntry => {
            // console.log('starEntry=', starEntry);
            if (
              Number(starEntry.ra) >= Number(raFrom) &&
              Number(starEntry.ra) <= Number(raTo) &&
              Number(starEntry.dec) > Number(decFrom) &&
              Number(starEntry.dec) < Number(decTo) &&
              Number(starEntry.mag) < Number(magLimit)
            ) {
              return starEntry;
            }
          });

          resolve(stars);
        })
        .catch(error => {
          console.log('Error reading star db', error);
          reject(error);
        });
    } catch (error) {
      console.log('caught error', error);
      reject(error);
    }
  });
}

export function loadDSOs() {
  return new Promise(function(resolve, reject) {
    // console.log('Loading dso db from url');

    try {
      axios
        .get('db/messier.json')
        .then(response => {
          console.log('got dso response', response);
          resolve(response.data.dsos);
        })
        .catch(error => {
          console.log('Error reading dso db', error);
          reject(error);
        });
    } catch (error) {
      console.log('caught dso error', error);
      reject(error);
    }
  });
}

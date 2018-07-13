import * as c from './starHopConstants';
import { STARS } from '../../../assets/db';

export const getDeepSpaceObjects = catalog => ({
  type: c.GET_DEEP_SPACE,
  catalog
});

export const updateHints = hints => ({
  type: c.UPDATE_HINTS,
  hints
});

export const updateLocation = (location, currentLocation) => dispatch => {
  dispatch({
    type: c.UPDATE_LOCATION,
    location
  });

  updateStarsForLocation(location, currentLocation, dispatch);
};

export const updateView = view => ({
  type: c.UPDATE_VIEW,
  view
});

export const updateEyepieceView = view => ({
  type: c.UPDATE_EYEPIECE_VIEW,
  view
});

export const updateSelectedHop = hop => ({
  type: c.UPDATE_SELECTED_HOP,
  hop
});

export const updateSkyDarkness = skyDarkness => ({
  type: c.UPDATE_SKY_DARKNESS,
  skyDarkness
});

function updateStarsForLocation(newLocation, currentLocation, dispatch) {
  const { ra } = newLocation;
  const { ra: curRa } = currentLocation;

  const decPartRa = ra - Math.trunc(ra);
  const decPartCurRa = curRa - Math.trunc(curRa);

  if (decPartRa < 0.2 && decPartCurRa < 0.2) {
    return;
  }

  if (decPartRa > 0.8 && decPartCurRa > 0.8) {
    return;
  }

  if (decPartRa >= 0.2 && decPartRa <= 0.8) {
    return;
  }

  const raInt = Math.round(newLocation.ra);

  const promise = new Promise(function(resolve, reject) {
    const raBefore = raInt === 0 ? 23 : raInt - 1;

    const stars = STARS[0].concat(STARS[raBefore], STARS[raInt]);

    resolve(stars);
  });

  promise
    .then(stars => {
      dispatch({
        type: c.UPDATE_STARS,
        stars
      });
    })
    .catch(error => {
      console.log('Error updating stars', error);
    });
}

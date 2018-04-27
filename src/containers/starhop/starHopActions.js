import * as c from './starHopConstants';

// updateZip action will post the GET_ZIP action to redux
export const getStars = starQuery => ({
  type: c.GET_STARS,
  starQuery,
});

export const getDeepSpaceObjects = catalog => ({
  type: c.GET_DEEP_SPACE,
  catalog,
});

export const updateHints = hints => ({
  type: c.UPDATE_HINTS,
  hints,
});

export const updateLocation = location => ({
  type: c.UPDATE_LOCATION,
  location,
});

export const updateView = view => ({
  type: c.UPDATE_VIEW,
  view,
});

export const updateEyepieceView = view => ({
  type: c.UPDATE_EYEPIECE_VIEW,
  view,
});

export const updateSelectedHop = hop => ({
  type: c.UPDATE_SELECTED_HOP,
  hop,
});

export const updateSkyDarkness = skyDarkness => ({
  type: c.UPDATE_SKY_DARKNESS,
  skyDarkness,
});

import * as c from './starHopConstants';

const DEFAULT_FINDER_VIEW = {
  fov: 7,
  magLimit: 8,
  width: 600,
  height: 600
};

const DEFAULT_EYEPIECE_VIEW = {
  fov: 1.5,
  magLimit: 12,
  width: 300,
  height: 300,
  scopeType: 'Dobsonian'
};

const TARGET_FOUND_RA_OFFSET = 0.03;
const TARGET_FOUND_DEC_OFFSET = 0.2;

export const defaultState = {
  stars: [],
  dsos: [],
  view: DEFAULT_FINDER_VIEW,
  eyepieceView: DEFAULT_EYEPIECE_VIEW,
  skyDarkness: 0,
  location: {
    ra: -1,
    dec: -1
  },
  selectedHop: {
    id: '',
    description: 'Please select an object to practicing hopping to',
    startingLocation: [
      {
        ra: -1,
        dec: -1
      }
    ],
    targetLocation: {
      ra: -1,
      dec: -1
    },
    selectedStar: {
      name: '',
      ra: -1,
      dec: -1
    }
  },
  hints: {
    showProgress: false,
    currentLocation: false,
    directionArrow: false,
    hintText: false
  },
  targetFound: false
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case c.GET_STARS_SUCCESS:
    case c.GET_STARS_FAILURE:
      return {
        ...state,
        stars: action.stars,
        starStatus: action.starStatus
      };

    case c.GET_DEEP_SPACE_SUCCESS:
    case c.GET_DEEP_SPACE_FAILURE:
      return {
        ...state,
        dsos: action.dsos
      };

    case c.UPDATE_HINTS:
      return {
        ...state,
        hints: action.hints
      };

    case c.UPDATE_LOCATION:
      let targetFound = viewContainsTarget(
        state.location,
        state.eyepieceView,
        state.selectedHop.targetLocation
      );
      return {
        ...state,
        location: action.location,
        targetFound
      };

    case c.UPDATE_VIEW:
      return {
        ...state,
        view: action.view
      };

    case c.UPDATE_EYEPIECE_VIEW:
      return {
        ...state,
        eyepieceView: action.view
      };

    case c.UPDATE_SELECTED_HOP:
      let newHop = action.hop;

      if (!action.hop.selectedStar) {
        newHop.selectedStar = newHop.startingLocation[0];
      }

      return {
        ...state,
        selectedHop: newHop,
        location: action.hop.selectedStar,
        targetFound: false
      };

    case c.UPDATE_SKY_DARKNESS:
      return {
        ...state,
        skyDarkness: action.skyDarkness
      };

    default:
      return state;
  }
}

function viewContainsTarget(location, view, target) {
  // console.log(`containsTarget
  //   view=${JSON.stringify(view)}
  //   target=${JSON.stringify(target)}
  // `);
  return isInView(target.ra, target.dec, 1, view, location);
}

// TODO Move to shared util
const RA_TO_DEG = 24 / 360;
function isInView(ra, dec, mag, view, location) {
  let widthRA = view.fov * RA_TO_DEG / 2;
  let widthDec = view.fov / 2;

  return (
    Math.abs(location.ra - ra) < widthRA &&
    Math.abs(location.dec - dec) < widthDec &&
    view.magLimit > mag
  );
}

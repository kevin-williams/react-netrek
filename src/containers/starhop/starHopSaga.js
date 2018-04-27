import axios from 'axios';

import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { loadStars, loadDSOs } from './starMapData';

import * as c from './starHopConstants';

export function* watchGetStars() {
  yield call(takeEvery, c.GET_STARS, getStars);
}

const getStarsLookup = starQuery => {
  return loadStars(starQuery);
};

export function* getStars(action) {
  // console.log('calling getStars with action=', action);
  try {
    const stars = yield call(getStarsLookup, action.starQuery);
    // console.log('data for stars=', stars);

    if (stars && stars.length > 0) {
      yield put({
        type: c.GET_STARS_SUCCESS,
        stars: stars,
        starStatus: {
          serviceFailure: false,
          message: `${stars.length} stars found`,
        },
      });
    } else {
      yield put({
        type: c.GET_STARS_FAILURE,
        stars: [],
        starStatus: {
          serviceFailure: false,
          message: 'No stars found',
        },
      });
    }
  } catch (error) {
    yield put({
      type: c.GET_STARS_FAILURE,
      stars: [],
      status: parseServiceErrorStatus('Error loading stars', error),
    });
  }
}

export function* watchGetDeepSpaceObjects() {
  yield call(takeEvery, c.GET_DEEP_SPACE, getDSOs);
}

const getDSOsLookup = catalog => {
  return loadDSOs(catalog);
};

export function* getDSOs(action) {
  try {
    const dsos = yield call(getDSOsLookup, action.catalog);
    // console.log('data for dsos=', dsos);

    if (dsos && dsos.length > 0) {
      yield put({
        type: c.GET_DEEP_SPACE_SUCCESS,
        dsos: dsos,
      });
    } else {
      yield put({
        type: c.GET_DEEP_SPACE_FAILURE,
        dsos: [],
      });
    }
  } catch (error) {
    yield put({
      type: c.GET_DEEP_SPACE_FAILURE,
      dsos: [],
    });
  }
}

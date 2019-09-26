export const ARCMINUTE_TO_DEG = 0.0167;
import {Dimensions} from 'react-native';

export const SCREEN = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const DSO_SCALE_CONSTANT = 0.7; // You won't see the full extent of the object in most scopes, so make it a bit smaller
export const RA_TO_DEG = 24 / 360;
export const HALF_IMG_WIDTH = 55;

export function getXYCoords(ra, dec, view, location) {
  console.log('getXY', ra, dec, view, location);

  // Center of Canvas
  let centerX = view.width / 2;
  let centerY = view.height / 2;

  let widthRA = (view.fov * RA_TO_DEG) / 2;
  let widthDec = view.fov / 2;

  let offsetX = (((location.ra - ra) / widthRA) * view.width) / 2;
  let offsetY = (((location.dec - dec) / widthDec) * view.height) / 2;

  if (
    offsetX > 0 &&
    offsetY > 0 &&
    offsetX < view.width &&
    offsetY < view.height
  ) {
    console.log(
      'getXY calcs',
      centerX + offsetX,
      centerY + offsetY,
      widthRA,
      widthDec,
      offsetX,
      offsetY,
    );
  }

  return {x: centerX + offsetX, y: centerY + offsetY, offsetX, offsetY};
}

export function isInView(x, y, mag, view) {
  console.log('isInView', x, y, mag, view);
  if (
    x < 0 ||
    y < 0 ||
    x > view.width ||
    y > view.height ||
    mag > view.magLimitAdjusted
  ) {
    return false;
  }

  return true;
}

export function isOnMap(x, y, mag, view) {
  console.log('isOnMap', x, y, mag, view);
  const {width, height} = view;

  const left = -3 * width;
  const right = 3 * width;
  const top = -3 * height;
  const bottom = 3 * height;

  if (
    x < left ||
    y < top ||
    x > right ||
    y > bottom ||
    mag > view.magLimitAdjusted
  ) {
    return false;
  }

  return true;
}

import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native-svg';
import {
  ARCMINUTE_TO_DEG,
  getXYCoords,
  isInView,
  HALF_IMG_WIDTH
} from '../../utils';
import { IMAGES } from '../../../assets/images';

const Dso = props => {
  const { dso, view, location } = props;
  let { ra, dec, r1, r2, angle, cat1, id1, mag } = dso;
  if (!r2) {
    r2 = r1;
  }
  let { x, y } = getXYCoords(ra, dec, view, location);

  if (!isInView(x, y, mag, view)) {
    return null;
  }

  let scale = view.height / view.fov; // 1.3 fudge factor to make up for image size
  let dsoWidth = Math.ceil(r1 * ARCMINUTE_TO_DEG * scale);
  let dsoHeight = Math.ceil(r2 * ARCMINUTE_TO_DEG * scale);

  let dsoName = `${cat1}${id1}`;

  //   console.log(`drawing dso ${dsoName} x=${x} y=${y} mag=${mag}
  //     width=${dsoWidth}, height=${dsoHeight}, scale=${scale}`);

  return (
    <Image
      key={dsoName}
      x={x - dsoWidth / 2}
      y={y - dsoHeight / 2}
      width={dsoWidth}
      height={dsoHeight}
      href={IMAGES[dsoName].img}
    />
  );
};

export { Dso };

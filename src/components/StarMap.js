import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  ClipPath,
  Defs,
  Image,
  RadialGradient,
  Rect,
  Stop
} from 'react-native-svg';
import Star from './svg/Star';
import StarGradient from './svg/StarGradient';
import { IMAGES } from '../../assets/images';
import {
  ARCMINUTE_TO_DEG,
  getXYCoords,
  isInView,
  HALF_IMG_WIDTH
} from '../utils';

export class StarMap extends Component {
  static propTypes = {
    stars: PropTypes.array.isRequired,
    dsos: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    view: PropTypes.object.isRequired,
    starMagLimit: PropTypes.number,
    dsoMagLimit: PropTypes.number,
    updateLocation: PropTypes.func
  };

  drawDSOs() {
    // TODO check the dsos array for real
    let { view, location, size } = this.props;
    view.magAdjustment = view.skyDarkness / 100;
    view.magLimitAdjusted = view.magLimit - view.magAdjustment;
    view.width = size;
    view.height = size;

    console.log('drawStars', view);

    return this.props.dsos.map(dso => {
      let { ra, dec, r1, r2, angle, cat1, id1, mag } = dso;
      if (!r2) {
        r2 = r1;
      }
      let { x, y } = getXYCoords(ra, dec, view, location);

      if (!isInView(x, y, mag, view)) {
        return;
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
    });
  }

  drawStars() {
    let { view, location, size } = this.props;
    view.magAdjustment = view.skyDarkness / 100;
    view.magLimitAdjusted = view.magLimit - view.magAdjustment;
    view.width = size;
    view.height = size;

    console.log('drawStars', view);

    return this.props.stars.map(starEntry => {
      let { ra, dec, mag } = starEntry;
      let { x, y } = getXYCoords(ra, dec, view, location);

      if (!isInView(x, y, mag, view)) {
        return;
      }

      let radius = Math.floor(10 - mag);
      if (radius < 1) {
        radius = 1;
      }

      //   console.log('drawing star at ', x, y, radius);

      return <Star key={`${ra}|${dec}`} cx={x} cy={y} radius={radius} />;
    });
  }

  render() {
    return (
      <Svg width={this.props.size} height={this.props.size}>
        <StarGradient />
        <Rect width={this.props.size} height={this.props.size} fill="#000" />
        {this.drawDSOs()}
        {this.drawStars()}
      </Svg>
    );
  }
}

export default StarMap;

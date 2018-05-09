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
import { getXYCoords, isInView } from '../utils';

import m57 from '../../assets/images/m57.jpg';

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
        {this.drawStars()}
      </Svg>
    );
  }
}

export default StarMap;

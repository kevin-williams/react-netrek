import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  ClipPath,
  Defs,
  RadialGradient,
  Rect,
  Stop
} from 'react-native-svg';
import Star from './svg/Star';
import StarGradients from './svg/StarGradients';

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

  render() {
    return (
      <Svg width={this.props.size} height={this.props.size}>
        <StarGradients />
        <Rect width={this.props.size} height={this.props.size} fill="#000" />
        <Star radius={10} />
      </Svg>
    );
  }
}

export default StarMap;

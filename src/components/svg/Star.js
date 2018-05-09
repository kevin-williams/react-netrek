import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient
} from 'react-native-svg';

export default class Star extends Component {
  static propTypes = {
    radius: PropTypes.number.isRequired
  };

  render() {
    const { radius, ...rest } = this.props;
    const fillStr = radius > 2 ? `url(#rad${radius})` : 'white';

    return (
      <Circle cx={radius} cy={radius} r={radius} fill={fillStr} {...rest} />
    );
  }
}

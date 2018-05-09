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
    const fillStr = radius > 2 ? 'url(#star)' : 'white';

    return <Circle r={radius} fill={fillStr} {...rest} />;
  }
}

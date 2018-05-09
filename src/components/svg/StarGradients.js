import React from 'react';
import Svg, {
  ClipPath,
  Defs,
  RadialGradient,
  Rect,
  Stop
} from 'react-native-svg';

export default () => {
  return (
    <Defs>
      <RadialGradient
        id="rad10"
        cx="10"
        cy="10"
        rx="10"
        ry="10"
        fx="10"
        fy="10"
      >
        <Stop offset="0" stopColor="#fff" stopOpacity="1" />
        <Stop offset="0.2" stopColor="#fff" stopOpacity="0.7" />
        <Stop offset="0.5" stopColor="#fff" stopOpacity="0.5" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </RadialGradient>
    </Defs>
  );
};

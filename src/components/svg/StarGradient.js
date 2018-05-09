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
      <RadialGradient id="star">
        <Stop offset="0" stopColor="#fff" stopOpacity="1" />
        <Stop offset="0.5" stopColor="#fff" stopOpacity="0.7" />
        <Stop offset="0.3" stopColor="#fff" stopOpacity="0.5" />
        <Stop offset="1" stopColor="#fff" stopOpacity="0" />
      </RadialGradient>
    </Defs>
  );
};

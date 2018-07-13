import React from 'react';
import Svg, { Defs, RadialGradient, Stop } from 'react-native-svg';

const StarGradient = () => (
  <Defs>
    <RadialGradient id="star">
      <Stop offset="0" stopColor="white" stopOpacity="1" />
      <Stop offset="1" stopColor="black" stopOpacity="1" />
    </RadialGradient>
  </Defs>
);

export { StarGradient };

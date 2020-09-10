import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {G, Rect} from 'react-native-svg';
import {Dso, Star, StarGradient} from './svg';

function StarMap({stars, dsos, location, view, skyDarkness, size}) {
  const drawDSOs = (view, location) => {
    // console.log('drawDSOs', view);

    return dsos.map(dso => (
      <Dso
        key={`${dso.cat1}${dso.id1}`}
        dso={dso}
        view={view}
        location={location}
      />
    ));
  };

  const drawStars = (view, location) => {
    // console.log('drawStars', view);

    return stars.map((star, index) => {
      // if (index > 2) return;
      return (
        <Star
          key={`star-${index}`}
          star={star}
          view={view}
          location={location}
        />
      );
    });
  };

  // const getView = () => {
  //   const view = {
  //     view.magAdjustment = skyDarkness / 100;
  //     view.magLimitAdjusted = view.magLimit - view.magAdjustment;
  //   view.width = size;
  //   view.height = size;

  //   return view;
  // };

  const myView = {
    // magAdjustment: skyDarkness / 100,
    ...view,
    magLimitAdjusted: view.magLimit - skyDarkness / 100,
    width: size,
    height: size,
  };

  return (
    <G>
      <StarGradient />
      <Rect width={size} height={size} fill="#000" />
      {drawDSOs(myView, location)}
      {drawStars(myView, location)}
    </G>
  );
}

export default StarMap;

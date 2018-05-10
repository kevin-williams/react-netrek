import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipPath, Defs, G, Rect, Stop } from 'react-native-svg';
import { Dso, Star, StarGradient } from './svg';

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

  drawDSOs(view, location) {
    console.log('drawDSOs', view);

    return this.props.dsos.map(dso => (
      <Dso
        key={`${dso.cat1}${dso.id1}`}
        dso={dso}
        view={view}
        location={location}
      />
    ));
  }

  drawStars(view, location) {
    console.log('drawStars', view);

    return this.props.stars.map(star => {
      let { ra, dec } = star;
      return (
        <Star
          key={`${ra}|${dec}`}
          star={star}
          view={view}
          location={location}
        />
      );
    });
  }

  getView() {
    let { view, size, skyDarkness } = this.props;
    view.magAdjustment = skyDarkness / 100;
    view.magLimitAdjusted = view.magLimit - view.magAdjustment;
    view.width = size;
    view.height = size;

    return view;
  }

  render() {
    const view = this.getView();
    const location = this.props.location;
    return (
      <G>
        <StarGradient />
        <Rect width={this.props.size} height={this.props.size} fill="#000" />
        {this.drawDSOs(view, location)}
        {this.drawStars(view, location)}
      </G>
    );
  }
}

export default StarMap;

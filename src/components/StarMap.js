import React, { Component } from 'react';
import { PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import { ClipPath, Defs, G, Rect, Stop } from 'react-native-svg';
import { Dso, Star, StarGradient } from './svg';
import { RA_TO_DEG } from '../utils';

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

  // componentWillMount() {
  //   if (this.props.updateLocation) {
  //     this.panResponder = PanResponder.create({
  //       onStartShouldSetPanResponder: () => true,
  //       onPanResponderMove: (event, gesture) => {
  //         const { view, location, updateLocation } = this.props;
  //         //   console.log('gesture=', gesture.dx, gesture.dy);
  //         let scaleX = view.width / view.fov / RA_TO_DEG * 1.5;
  //         let scaleY = view.height / view.fov * 1.5;

  //         let newLocation = {
  //           ra: location.ra + gesture.dx / scaleX,
  //           dec: location.dec + gesture.dy / scaleY
  //         };

  //         updateLocation(newLocation);
  //       },
  //       onPanResponderRelease: (event, gesture) => {
  //         //   console.log('release=', gesture);
  //       }
  //     });
  //   } else {
  //     console.log(
  //       'No updateLocation function, so no need to attach PanResponder'
  //     );
  //   }
  // }

  drawDSOs(view, location) {
    // console.log('drawDSOs', view);

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
    // console.log('drawStars', view);

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
    // const panHanlders = this.props.updateLocation
    //   ? this.panResponder.panHandlers
    //   : null;

    return (
      // <G {...panHanlders}>
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

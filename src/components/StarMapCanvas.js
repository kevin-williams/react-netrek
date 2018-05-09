import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Canvas from 'react-native-canvas';

import { getXYCoords, SCREEN } from '../utils';

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

  // Set both sizes to the same smaller dimension

  drawMap = canvas => {
    let { view: myView, location, skyDarkness, size } = this.props;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, size, size);

    // SkyDarkness is a percent, so adjust to be a decimal up to 1 magnitude
    myView.magAdjustment = skyDarkness / 100;
    myView.magLimitAdjusted = myView.magLimit - myView.magAdjustment;
    myView.width = size;
    myView.height = size;

    console.log(
      'drawing map for ' + this.props.stars.length + ' stars with view=',
      myView
    );

    // this.drawFOV(ctx, myView);
    // this.drawLocation(ctx, myView, location);
    // this.drawArrow(ctx, myView, location);

    ctx.save();

    // if (myView.fov > 7) {
    //   this.drawTelrad(ctx, myView);
    // } else {
    //   this.drawReticle(ctx, myView);
    //   this.drawScopeCircle(ctx, myView);
    // }

    this.props.stars.map(star => {
      // if (isInView(star.ra, star.dec, star.mag, myView, location)) {
      this.drawStar(ctx, myView, location, star);
      // }
    });

    // this.props.dsos.map(dso => {
    //   if (isInView(dso.ra, dso.dec, dso.mag, myView, location)) {
    //     // console.log('dso=', dso);
    //     this.drawDSO(ctx, myView, location, dso);
    //   }
    // });

    // if (this.props.customHop.targetLocation.ra >= 0) {
    //   let customDSO = this.props.customHop.targetLocation;
    //   customDSO.mag = 8;
    //   customDSO.r1 = 5;
    //   customDSO.r2 = 5;
    //   // console.log('customDSO=', customDSO);
    //   this.drawDSO(ctx, myView, location, customDSO);
    // }

    ctx.restore();
    console.log('end draw map');
  };

  async drawStar(ctx, view, location, starEntry) {
    try {
      let { ra, dec, mag } = starEntry;
      // console.log('view=', view);
      // console.log('starEntry=', starEntry);

      let { x, y } = getXYCoords(ra, dec, view, location);
      if (x < 0 || y < 0 || x > view.width || y > view.height) {
        return;
      }

      let flipVertically = false;
      let flipHorizontally = false;

      switch (view.scopeType) {
        case 'Refractor':
        case 'SCT':
          flipHorizontally = true;
          break;
        case 'Dobsonian':
          flipHorizontally = true;
          flipVertically = true;
      }

      if (flipVertically) {
        y = view.height - y;
      }

      if (flipHorizontally) {
        x = view.width - x;
      }

      let size = Math.floor(30 - 2 * mag);

      let halfSize = Math.ceil(size / 2);
      if (size >= 2) {
        var grd = await ctx.createRadialGradient(x, y, 0, x, y, halfSize);
        grd.addColorStop(0, 'rgba(255,255,255,1)');
        grd.addColorStop(1, 'rgba(0,0,0,0');

        ctx.fillStyle = grd;
      } else {
        size = 1;
        halfSize = 0;
        ctx.fillStyle = 'White';
      }

      ctx.fillStyle = 'White';
      console.log(
        `drawing star (${ra}, ${dec}) at x=${x} y=${y} size=${size} mag=${mag} for fov=${
          view.fov
        }`
      );

      ctx.fillRect(x - halfSize, y - halfSize, size, size);
    } catch (error) {
      console.log('error drawing star', error);
    }
  }

  render() {
    console.log('StarMap props=', this.props);
    return (
      <View
        style={{
          backgroundColor: 'black',
          width: this.props.size,
          height: this.props.size
        }}
      >
        <Canvas ref={this.drawMap} />
      </View>
    );
  }
}

import React, { Component } from 'react'
import { Animated, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Svg from 'react-native-svg';

import { StarMap } from '../../components/StarMap';
import { updateLocation } from './starHopActions';

import { RA_TO_DEG } from '../../utils';

class StarMapView extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
        view: PropTypes.object.isRequired,
    }

    updateLocation = event => {
        const { view, location } = this.props.starhop;

        let scaleX = view.width / view.fov / RA_TO_DEG * 1.5;
        let scaleY = view.height / view.fov * 1.5;

        console.log('scaleX, scaleY', scaleX, scaleY);

        let newLocation = {
            ra: location.ra + contentOffset.x / scaleX,
            dec: location.dec + contentOffset.y / scaleY
        };

        console.log('newLocation=', newLocation);

        this.props.updateLocation(newLocation);
    };

    render() {
        return (
            <Animated.View style={{ width: this.props.size, height: this.props.size }}>
                <Svg width={this.props.size * 3} height={this.props.size * 3}>
                    <StarMap
                        stars={this.props.starhop.stars}
                        dsos={this.props.starhop.dsos}
                        view={this.props.starhop.view}
                        location={this.props.starhop.location}
                        skyDarkness={this.props.starhop.skyDarkness}
                        size={this.props.size}
                        updateLocation={this.props.updateLocation}
                    />
                </Svg>
            </Animated.View>
        )
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
    updateLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(StarMapView)

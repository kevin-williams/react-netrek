import React, { Component } from 'react'
import { Animated, PanResponder, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Svg from 'react-native-svg';

import { StarMap } from '../../components/StarMap';
import { updateLocation } from './starHopActions';

import { RA_TO_DEG, getXYCoords } from '../../utils';

class StarMapView extends Component {
    static propTypes = {
        size: PropTypes.number.isRequired,
        view: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.position = new Animated.ValueXY();

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                // console.log('gesture=' + JSON.stringify(gesture));
                // console.log('position=' + JSON.stringify(this.position));
                this.position.setValue(this.calculatePosition(gesture));
            },
            onPanResponderRelease: (event, gesture) => {
                this.updateLocation(gesture);
            }
        });
    }

    /**
     * We'll use the same calculation as updateLocation, then revert it back to offset for the animation
     */
    calculatePosition = gesture => {
        return { x: gesture.dx, y: gesture.dy };
    }

    calculateLocation = gesture => {
        const { view, location } = this.props.starhop;

        let widthRA = view.fov * RA_TO_DEG / 2;
        let widthDec = view.fov / 2;

        let ra = location.ra + (2 * gesture.dx * widthRA / view.width);
        let dec = location.dec + (2 * gesture.dy * widthDec / view.height);

        console.log('ra, dec', ra, dec);

        return { ra, dec };
    }

    updateLocation = gesture => {
        let newLocation = this.calculateLocation(gesture);
        console.log('updateLocation=', newLocation);
        this.props.updateLocation(newLocation);
        this.position.setValue({ x: 0, y: 0 });
    };

    render() {
        console.log('this.position', JSON.stringify(this.position));
        return (
            <Animated.View {...this.panResponder.panHandlers}
                style={{
                    width: this.props.size * 3,
                    height: this.props.size * 3,
                    transform: [{ translateX: this.position.x }, { translateY: this.position.y }]
                }}>
                <Svg width={this.props.size * 3} height={this.props.size * 3}>
                    <StarMap
                        stars={this.props.starhop.stars}
                        dsos={this.props.starhop.dsos}
                        view={this.props.starhop.view}
                        location={this.props.starhop.location}
                        skyDarkness={this.props.starhop.skyDarkness}
                        size={this.props.size}
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

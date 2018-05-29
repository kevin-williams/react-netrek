import React, { Component } from 'react'
import { Animated, PanResponder, View, Text } from 'react-native'
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

    constructor(props) {
        super(props);

        this.position = new Animated.ValueXY();

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                // console.log('gesture=', gesture);
                this.position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (event, gesture) => {
                updateLocation(gesture);
            }
        });
    }


    updateLocation = gesture => {
        const { view, location } = this.props.starhop;

        let scaleX = view.width / view.fov / RA_TO_DEG * 1.5;
        let scaleY = view.height / view.fov * 1.5;

        console.log('scaleX, scaleY', scaleX, scaleY);

        let newLocation = {
            ra: location.ra + gesture.dx / scaleX,
            dec: location.dec + gesture.dy / scaleY
        };

        console.log('newLocation=', newLocation);

        this.props.updateLocation(newLocation);
    };

    render() {
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

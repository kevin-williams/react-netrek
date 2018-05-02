import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native';

export default class HopList extends Component {
    render() {
        return (
            <View>
                <Text> HopList </Text>

                <Link to="/setup/starSelection">
                    <Text>Next</Text>
                </Link>
            </View>
        )
    }
}
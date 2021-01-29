import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderComponent} from '../components';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <HeaderComponent />
                <TouchableOpacity 
                onPress = {() => this.props.navigation.navigate('DetailScreen')}>
                    <Text>Spirited Away</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

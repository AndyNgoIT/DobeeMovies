import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderComponent} from '../components';
import FastImage from 'react-native-fast-image';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <HeaderComponent />
                <TouchableOpacity 
                onPress = {() => this.props.navigation.navigate('DetailScreen')}>
                    <Text>Spirited Away</Text>
                </TouchableOpacity>
                <FastImage
                    source={require('../assets/images/avatar.webp')}
                    style={styles.viewAvatar}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewAvatar: {
        width: 300,
        height: 300,
        marginTop: 24
    }
})

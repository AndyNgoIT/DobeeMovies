import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from "react-native";
import {scale} from '../utils/scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const screenSize = Dimensions.get('window');

class GridItem extends React.Component{
    render(): React.ReactNode {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.props.onPress}
                style={styles.touchable}>
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={['#14F1D9', '#3672F8']}
                    style={styles.icon}>
                    <Icon
                        name={this.props.iconName}
                        color='white'
                        size={scale(42)}
                    />
                </LinearGradient>
                <Text style={styles.text}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        height: screenSize.width/2,
        width: screenSize.width/2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#CED0CE',
    },
    text: {
        fontSize: scale(20),
        fontWeight: '300',
        color: 'black'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
        borderRadius: 25,
        backgroundColor: '#41abe1',
        height: scale(75),
        width: scale(75),
    }
});

export {GridItem};

import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { scale } from '../utils/scale';

class GradientButton extends React.Component{
    render(): React.ReactNode {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.props.onPress}
                style={[styles.container, {height: this.props.height}, {marginVertical: this.props.marginVertical}]}>
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={[this.props.beginColor, this.props.endColor]}
                    style={styles.linearGradient}>
                    <Text style={[styles.buttonText, {fontSize: this.props.fontSize}]}>
                        {this.props.text}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 28,
    },
    linearGradient: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 28,
    },
    buttonText: {
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: scale(10),
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export {GradientButton};

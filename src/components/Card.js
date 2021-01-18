import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient";
import {scale} from "../utils/scale";

const screenSize = Dimensions.get('window');

class Card extends React.Component{

    _switchCard = (type) => {
        switch (type) {
            case 'full':
                return (
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        activeOpacity={0.8}>
                        <ImageBackground
                            source={this.props.photo}
                            resideMode='cover'
                            style={styles.imageBackground}>
                            <LinearGradient
                                style={{flex: 1, alignSelf: 'stretch', justifyContent: 'flex-end'}}
                                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(39,62,84,0.82)']}>
                                <Text style={styles.header}>{this.props.header}</Text>
                                <Text
                                    numberOfLines={1}
                                    style={styles.text}>
                                    {this.props.text}
                                </Text>
                            </LinearGradient>
                        </ImageBackground>
                    </TouchableOpacity>
                )

        }
    };

    render(): React.ReactNode {
        return (
            this._switchCard(this.props.type)
        );
    }
}

styles = StyleSheet.create({
    imageBackground: {
        height: screenSize.width*3/4,
        width: '100%',
    },
    header: {
        fontSize: scale(25),
        fontWeight: '300',
        color: 'white',
        marginHorizontal: 20,
    },
    text: {
        fontSize: scale(18),
        color: 'white',
        marginHorizontal: 20,
        marginBottom: 20,
    }
});

export {Card};

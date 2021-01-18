import React from "react";
import {View, StyleSheet, Image, TouchableOpacity, Dimensions, Text} from "react-native";
import {scaleImage} from '../utils/scale';
import {TouchableRipple} from "react-native-paper";
import Icon from "./ListItem";

const screenSize = Dimensions.get('window');
// const mansoryHeight = scaleImage((screenSize.width - 2*2*2)/2, this.props.ratio);

class GalleryItem extends React.Component{

    _switchGalleryItem = (type) => {
        switch (type) {
            case 'normal':
                return(
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.props.onPress}
                        style={styles.container}>
                        <View style={{margin: 2}}>
                            <Image
                                style={styles.imageDefault}
                                resizeMode="cover"
                                source={{uri: this.props.url}}/>
                        </View>
                    </TouchableOpacity>
                );
            case 'mansory':
                return(
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.props.onPress}
                        style={styles.container}>
                        <View style={{margin: 2}}>
                            <Image
                                style={[styles.imageMansory,
                                    {height: scaleImage((screenSize.width/2-2*2), this.props.ratio)}]}
                                resizeMode="cover"
                                source={{uri: this.props.url}}/>
                        </View>
                    </TouchableOpacity>
                );
        }
    };

    render(): React.ReactNode {
        return (
            this._switchGalleryItem(this.props.type)
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
    },
    imageDefault: {
        height: screenSize.width/3 - 2*2,
        width: screenSize.width/3 - 2*2,
    },
    imageMansory: {
        width: screenSize.width/2 - 2*2,
    },
});

export {GalleryItem};

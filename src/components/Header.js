import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import {scaleVertical, scale} from '../utils/scale';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component{

    _switchHeader = (type) => {
        switch (type) {
            case 'normal':
                return(
                    <View style={[styles.container, {backgroundColor: '#ffffff', elevation: 8}]}>
                        <View style={styles.split}>
                            <TouchableOpacity
                                onPress={this.props.onPress}
                                style={styles.leftIcon}>
                                <Icon
                                    name="chevron-left"
                                    color='black'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.split, {alignItems: 'center'}]}>
                            <Text style={[styles.headerLabel, {color: 'black'}]}>{this.props.label}</Text>
                        </View>
                        <View style={styles.split}/>
                    </View>
                );
            case 'noElevation':
                return(
                    <View style={[styles.container, {backgroundColor: '#ffffff'}]}>
                        <View style={styles.split}>
                            <TouchableOpacity
                                onPress={this.props.onPress}
                                style={styles.leftIcon}>
                                <Icon
                                    name="chevron-left"
                                    color='black'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.split, {alignItems: 'center'}]}>
                            <Text style={[styles.headerLabel, {color: 'black'}]}>{this.props.label}</Text>
                        </View>
                        <View style={styles.split}/>
                    </View>
                );
            case 'menu':
                return(
                    <View style={[styles.container, {backgroundColor: '#ffffff', elevation: 8}]}>
                        <View style={styles.split}>
                            <TouchableOpacity
                                onPress={this.props.onPress}
                                style={styles.leftIcon}>
                                <Icon
                                    name="bars"
                                    color='black'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.split, {alignItems: 'center'}]}>
                            <Text style={[styles.headerLabel, {color: 'black'}]}>{this.props.label}</Text>
                        </View>
                        <View style={styles.split}/>
                    </View>
                );
            case 'overlay':
                return(
                    <View style={[styles.container, {backgroundColor: 'rgba(39,62,84,0.82)', zIndex: this.props.zIndex}, {position: this.props.position}]}>
                        <View style={styles.split}>
                            <TouchableOpacity
                                onPress={this.props.onPress}
                                style={styles.leftIcon}>
                                <Icon
                                    name="chevron-left"
                                    color='white'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.split, {alignItems: 'center'}]}>
                            <Text style={[styles.headerLabel, {color: 'white'}]}>{this.props.label}</Text>
                        </View>
                        <View style={styles.split}/>
                    </View>
                );

        }
    };

    render(): React.ReactNode {
        return (
            this._switchHeader(this.props.type)
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: scaleVertical(58),
        width: '100%',
        flexDirection: 'row',
    },
    split:{
        flex: 1,
        justifyContent: 'center',
    },
    leftIcon:{
        paddingLeft: 12
    },
    headerLabel:{
        fontWeight: 'bold',
        fontSize: scale(16),
    }
});

export {Header};

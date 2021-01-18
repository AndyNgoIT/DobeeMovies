import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {scale} from '../utils/scale';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListItem extends React.Component{

    _switchListItem = (type) => {
        switch (type) {
            case 'normal':
                return(
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={styles.touchable}>
                        <Text style={styles.text}>{this.props.label}</Text>
                    </TouchableOpacity>
                );
            case 'menu':
                return(
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={[styles.touchable, {flexDirection: 'row'}]}>
                        <View style={styles.icon}>
                            <Icon
                                name={this.props.iconName}
                                color='#41abe1'
                                size={30}
                            />
                        </View>
                        <Text style={styles.text}>{this.props.label}</Text>
                    </TouchableOpacity>
                );
            case 'drawer':
                return(
                    <TouchableRipple
                        rippleColor="rgba(0, 0, 0, .32)"
                        onPress={this.props.onPress}
                        style={styles.touchableDrawer}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.icon}>
                                <Icon
                                    name={this.props.iconName}
                                    color='#41abe1'
                                    size={30}
                                />
                            </View>
                            <Text style={styles.textDrawer}>{this.props.label}</Text>
                        </View>
                    </TouchableRipple>
                );
        }
    };

    render(): React.ReactNode {
        return (
            this._switchListItem(this.props.type)
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        paddingVertical: 32.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#CED0CE',
    },
    text: {
        fontSize: scale(20),
        fontWeight: '300',
        color: 'black',
        marginLeft: 16.5,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 62,
    },
    touchableDrawer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#CED0CE',
        paddingVertical: 16,
        alignItems: 'center',
    },
    textDrawer: {
        fontSize: scale(18),
        fontWeight: '300',
        color: 'black'
    }
});

export {ListItem};

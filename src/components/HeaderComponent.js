import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class HeaderComponent extends Component {
    render () {
        const { title, fontWeight, fontSize, color, textAlign } = this.props;
        return (
            <View style={{paddingVertical: 12, paddingHorizontal: 21}}>
                <Text style={{fontWeight, fontSize, color, textAlign}}> 
                    {title}
                </Text>
            </View>
        )
    }
};




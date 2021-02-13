import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

export default class DetailScreen extends Component {
           
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                    <View style={{paddingVertical: 12,}}>
                       <Text 
                       style={{fontWeight: 'bold', fontSize: 28, color: '#001f45'}}>
                        Chi Tiết</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

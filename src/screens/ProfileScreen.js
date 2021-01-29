import React, { Component } from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> profile screen  </Text>
                <Button 
                title = "Đăng Xuất"
                onPress = {() => this.props.navigation.navigate('LoginScreen')}
                />
            </SafeAreaView>
        )
    }
}

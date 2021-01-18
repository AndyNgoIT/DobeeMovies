import React from "react";
import {View, StatusBar, ActivityIndicator, AsyncStorage, StyleSheet} from "react-native";

class AuthLoading extends React.Component{
    constructor(props) {
        super(props);
        this._homeAsync();
    }

    _homeAsync = async () => {
        const startToken = await AsyncStorage.getItem('startToken');
        this.props.navigation.navigate(startToken ? startToken : 'grid');
    };

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {AuthLoading};

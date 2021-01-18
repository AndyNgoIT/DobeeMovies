import React from "react";
import {View, FlatList} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
import {SignUp, LogIn} from '../auth';
import {flipY} from 'react-navigation-transitions';

const LogInRoutes = [
    {
        id: 'logIn',
        label: 'Log in',
    },
    {
        id: 'signUp',
        label: 'Sign up',
    }
];

class AuthMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: LogInRoutes
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    renderItem={this._renderItem}
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}/>
            </View>
        );
    }
}

class AuthMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: LogInRoutes
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <Header
                    type='normal'
                    label='AUTH'
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                />
                <View style={{flex: 1}}>
                    <FlatList
                        renderItem={this._renderItem}
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        );
    }
}

const AuthNavigator = createStackNavigator({
    authMenu: AuthMenuWithHeader,
    logIn: LogIn,
    signUp: SignUp,
},{
    headerMode: 'none',
    transitionConfig: () => flipY(1000),
});

const AuthContainer = createAppContainer(AuthNavigator);

export {AuthContainer,AuthNavigator, AuthMenu, AuthMenuWithHeader};

import React from "react";
import {View, FlatList, AsyncStorage} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
// import {ListNavigator} from '../navigations/ListNavigation';
// import {GridNavigator} from '../navigations/GridNavigation';

const NavigationRoutes = [
    {
        id: 'grid',
        label: 'Grid',
    },
    {
        id: 'list',
        label: 'List',
    },
    {
        id: 'drawer',
        label: 'Drawer',
    },
    {
        id: 'tab',
        label: 'Tab',
    },
];

class NavigationMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: NavigationRoutes
        }
    }

    _navigateAsync = async (id) => {
        await AsyncStorage.setItem('startToken', id);
        this.props.navigation.navigate(id);
    }

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => item.id=='drawer' ? this.props.navigation.openDrawer() : this._navigateAsync(item.id)}
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

class NavigationMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: NavigationRoutes
        }
    }

    _navigateAsync = async (id) => {
        await AsyncStorage.setItem('startToken', id);
        this.props.navigation.navigate(id);
    };

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => item.id==='drawer' ? this.props.navigation.openDrawer() : this._navigateAsync(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <Header
                    type='normal'
                    label='NAVIGATION'
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                />
                <View style={{flex: 1}}>
                    <FlatList
                        renderItem={this._renderItem}
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}/>
                </View>
            </View>
        );
    }
}

// const NavigationNavigator = createStackNavigator({
//     menu: NavigationMenuWithHeader,
//     // list: ListNavigator,
//     // grid: GridNavigator,
// },{
//     headerMode: 'none'
// });
//
// const NavigationContainer = createAppContainer(NavigationNavigator);

export {NavigationMenu, NavigationMenuWithHeader};

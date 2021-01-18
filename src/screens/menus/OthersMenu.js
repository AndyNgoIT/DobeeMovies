import React from "react";
import {View, FlatList} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
import {Gallery} from '../others/Gallery';
import {GalleryV2} from '../others/GalleryV2';
import {Splash} from '../others/Splash';
import {fromRight, flipY} from 'react-navigation-transitions';

const OthersRoutes = [
    {
        id: 'setting',
        label: 'Setting',
    },
    {
        id: 'splash',
        label: 'Splash',
    },
    {
        id: 'swipe',
        label: 'Swipe',
    },
    {
        id: 'galleryV1',
        label: 'Gallery V1',
    },
    {
        id: 'galleryV2',
        label: 'Gallery V2',
    },
];

class OthersMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: OthersRoutes
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

class OthersMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: OthersRoutes
        }
    }

    _renderItem = ({item}) => (
        <ListItem
            type='normal'
            label={item.label}
            onPress={() => item.id==='splash'
                ? this.props.navigation.navigate(item.id, {toNavigationMenu: 'true'})
                : this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <Header
                    type='normal'
                    label='OTHERS'
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

const OthersNavigator = createStackNavigator({
    main: OthersMenuWithHeader,
    galleryV1: Gallery,
    galleryV2: GalleryV2,
    splash: Splash,
},{
    headerMode: 'none',
    transitionConfig: () => fromRight(600),
});

const OthersContainer = createAppContainer(OthersNavigator);

export {OthersContainer, OthersNavigator, OthersMenu, OthersMenuWithHeader};

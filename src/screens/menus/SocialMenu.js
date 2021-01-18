import React from "react";
import {View, FlatList} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
import {ProfileV1} from '../social/ProfileV1';
import {ProfileV2} from '../social/ProfileV2';
import {FriendList} from '../social/FriendList';

const SocialRoutes = [
    {
        id: 'profile',
        label: 'Profile V1',
    },
    {
        id: 'profile2',
        label: 'Profile V2',
    },
    {
        id: 'profileSetting',
        label: 'Profile setting',
    },
    {
        id: 'notification',
        label: 'Notification',
    },
    {
        id: 'friendList',
        label: 'Friend list',
    },
];

class SocialMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: SocialRoutes
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

class SocialMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: SocialRoutes
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
                    label='SOCIAL'
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

const SocialNavigator = createStackNavigator({
    socialMenu: SocialMenuWithHeader,
    profile: ProfileV1,
    profile2: ProfileV2,
    friendList: FriendList,
},{
    headerMode: 'none'
});

const SocialContainer = createAppContainer(SocialNavigator);

export {SocialNavigator, SocialMenu, SocialMenuWithHeader};

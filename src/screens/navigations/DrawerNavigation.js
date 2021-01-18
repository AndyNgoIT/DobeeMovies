import React from "react";
import {View, FlatList, ImageBackground, StyleSheet} from "react-native";
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import {scale} from '../../utils/scale';
import {HomeNavigator} from './HomeNavigation';
import {AuthNavigator} from '../menus/AuthMenu';
import {SocialNavigator} from '../menus/SocialMenu';
import {ArticlesNavigator} from '../menus/ArticlesMenu';
import {MessagesNavigator} from '../menus/MessagesMenu';
import {DashboardNavigator} from '../menus/DashboardMenu';
import {OthersNavigator} from '../menus/OthersMenu';
import {NavigationMenuWithHeader} from '../menus/NavigationMenu';

import {ListItem} from '../../components';

const DrawerRoute = [
    {
        id: 'home',
        label: 'Home',
        icon: 'map-marker',
    },
    {
        id: 'auth',
        label: 'Auth',
        icon: 'lock',
    },
    {
        id: 'social',
        label: 'Social',
        icon: 'user',
    },
    {
        id: 'articles',
        label: 'Articles',
        icon: 'paper-plane',
    },
    {
        id: 'messages',
        label: 'Messages',
        icon: 'envelope',
    },
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'area-chart',
    },
    {
        id: 'navigation',
        label: 'Navigation',
        icon: 'map',
    },
    {
        id: 'others',
        label: 'Others',
        icon: 'cog',
    },
]

class DrawerContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DrawerRoute
        }
    }

    _renderHeader = () => (
        <View style = {styles.headerContainer}>
            <ImageBackground
                source = {require('../../assets/images/drawer-header-image.png')}
                style = {styles.imageBackground}>
            </ImageBackground>
            <View/>
        </View>
    );

    _renderItem = ({item}) => (
        <ListItem
            type='drawer'
            label={item.label}
            iconName={item.icon}
            onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id;

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <FlatList
                        renderItem={this._renderItem}
                        ListHeaderComponent={this._renderHeader}
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        );
    }
}

const Drawer = createDrawerNavigator({
    home: {
        screen: HomeNavigator,
    },
    auth: {
        screen: AuthNavigator,
    },
    social: {
        screen: SocialNavigator,
    },
    articles: {
        screen: ArticlesNavigator,
    },
    messages: {
        screen: MessagesNavigator,
    },
    dashboard: {
        screen: DashboardNavigator,
    },
    navigation: {
        screen: NavigationMenuWithHeader,
    },
    others: {
        screen: OthersNavigator,
    },
},{
    gestureEnabled: true,
    contentComponent: DrawerContent,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
    },
    headerContainer: {
        height: scale(240),
        borderBottomWidth: 1,
        borderColor: '#bcbcbc',
    },
});

const DrawerContainer = createAppContainer(Drawer);

export {DrawerContainer, Drawer};

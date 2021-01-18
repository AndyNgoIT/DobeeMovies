import React from "react";
import {View, FlatList, BackHandler} from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {GridItem, Header} from '../../components';
// import {AuthNavigator} from '../menus/AuthMenu';
// import {SocialNavigator} from '../menus/SocialMenu';
// import {ArticlesNavigator} from '../menus/ArticlesMenu';
// import {MessagesNavigator} from '../menus/MessagesMenu';
// import {DashboardNavigator} from '../menus/DashboardMenu';
// import {OthersNavigator} from '../menus/OthersMenu';
// import {NavigationNavigator} from '../menus/NavigationMenu';

const GridRoutes = [
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
        icon: 'pie-chart',
    },
    {
        id: 'navigation',
        label: 'Navigation',
        icon: 'map',
    },
    {
        id: 'others',
        label: 'Others',
        icon: 'ellipsis-h',
    },
];

class GridNavigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: GridRoutes
        }
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }
    //
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }
    //
    // handleBackButton() {
    //     return true;
    // }

    _renderHeader = () => (
        <Header
            type='menu'
            label='GRID'
            onPress={() => this.props.navigation.openDrawer()}
        />
    );

    _renderItem = ({item}) => (
        <GridItem
            iconName={item.icon}
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
                    ListHeaderComponent={this._renderHeader}
                    data={this.state.data}
                    numColumns={2}
                    keyExtractor={this._keyExtractor}/>
            </View>
        );
    }
}

const GridNavigator = createStackNavigator({
    menu: GridNavigation,
    // auth: AuthNavigator,
    // social: SocialNavigator,
    // articles: ArticlesNavigator,
    // messages: MessagesNavigator,
    // dashboard: DashboardNavigator,
    // navigation: NavigationNavigator,
    // others: OthersNavigator,
},{
    headerMode: 'none',
    initialRouteName: 'menu',
});

// const GridContainer = createAppContainer(GridNavigator);

export {GridNavigation, GridNavigator};


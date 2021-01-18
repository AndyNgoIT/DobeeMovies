import React from "react";
import {View, FlatList} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
import {ArticleV1} from '../articles/ArticleV1';

const ArticlesRoutes = [
    {
        id: 'articlesV1',
        label: 'Articles V1',
    },
    {
        id: 'articlesV2',
        label: 'Articles V2',
    },
    {
        id: 'articlesV3',
        label: 'Articles V3',
    },
    {
        id: 'articlesView',
        label: 'Articles view',
    },
];

class ArticlesMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ArticlesRoutes
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

class ArticlesMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ArticlesRoutes
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
                    label='ARTICLES'
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

const ArticlesNavigator = createStackNavigator({
    articlesMenu: ArticlesMenuWithHeader,
    articlesV1: ArticleV1,
},{
    headerMode: 'none'
});

const ArticlesContainer = createAppContainer(ArticlesNavigator);

export {ArticlesContainer, ArticlesNavigator, ArticlesMenu, ArticlesMenuWithHeader};

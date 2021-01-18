import React from "react";
import {View, FlatList} from "react-native";
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import {ListItem, Header} from '../../components';
import {Chat} from '../messages/Chat';
import {ChatList} from '../messages/ChatList';

const MessagesRoutes = [
    {
        id: 'chat',
        label: 'Chat',
    },
    {
        id: 'chatList',
        label: 'Chat list',
    },
    {
        id: 'comment',
        label: 'Comments',
    },
];

class MessagesMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: MessagesRoutes
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

class MessagesMenuWithHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: MessagesRoutes
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
                    label='MESSAGES'
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

const MessagesNavigator = createStackNavigator({
    messageMenu: MessagesMenuWithHeader,
    chat: Chat,
    chatList: ChatList,
},{
    headerMode: 'none'
});

const MessagesContainer = createAppContainer(MessagesNavigator);

export {MessagesContainer, MessagesNavigator, MessagesMenu, MessagesMenuWithHeader};

import * as React from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header, SearchBar} from "../../components";
import {users, chats} from '../../data';
import {scale, scaleVertical} from '../../utils/scale';
import {NavigationActions} from "react-navigation";

class ChatList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: chats,
        };
        this.arrayHolder = chats;
    }

    _onPressItem = (item) => {
        this.props.navigation.navigate('chat', {id: item.withUserId});
    };

    _onSearchTextChange = (text) => {
        const upperText = text.toUpperCase();
        const newData = this.arrayHolder.filter(item => {
            const firstName = users.find(userItem => userItem.id === item.withUserId).firstName;
            const lastName = users.find(userItem => userItem.id === item.withUserId).lastName;
            const fullName = firstName+' '+lastName;
            return firstName.toUpperCase().match(upperText)
                || lastName.toUpperCase().match(upperText)
                || fullName.toUpperCase().match(upperText)
        });
        this.setState({
            data: newData,
        });
    };

    _renderHeader = () => (
        <View>
            <Header
                type='noElevation'
                label='CHAT LIST'
                onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            />
            <SearchBar
                onSearchTextChange={this._onSearchTextChange}
            />
        </View>
    );

    _renderItem = ({item}) => {
        const userData = users.find(user => user.id === item.withUserId);
        const messageData = item.messages.find(mess => mess.id === item.messages.length-1);
        return (
            <TouchableOpacity
                onPress={() => this._onPressItem(item)}
                style={styles.container}>
                <Image
                    style={styles.avatar}
                    resizeMode='cover'
                    source={userData.photo}
                />
                <View style={styles.details}>
                    <Text style={styles.name}>{userData.firstName} {userData.lastName}</Text>
                    <Text
                        numberOfLines={1}
                        style={styles.message}>
                        {messageData.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    };

    _keyExtractor = (item) => item.withUserId.toString();

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._renderHeader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '81%',
        marginLeft: '19%',
        backgroundColor: '#CED0CE',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        height: scale(42),
        width: scale(42),
        borderRadius: 25,
        margin: 12,
    },
    details: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#CED0CE',
        paddingVertical: 12,
    },
    name: {
        fontWeight: 'bold',
        fontSize: scale(18),
        color: 'black',
    },
    message: {
        fontSize: scale(14),
        color: '#999',
    },
});

export {ChatList};

import * as React from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header, SearchBar} from "../../components";
import {users} from '../../data';
import {scale, scaleVertical} from '../../utils/scale';

import {NavigationActions} from "react-navigation";

class FriendList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: users,
        };
        this.arrayHolder = users;
    }

    _onPressItem = (item) => {
        this.props.navigation.navigate('profile', {id: item.id});
    };

    _onSearchTextChange = (text) => {
        const upperText = text.toUpperCase();
        const newData = this.arrayHolder.filter(item => {
            const fullName = item.firstName+' '+item.lastName;
            return item.firstName.toUpperCase().match(upperText)
                || item.lastName.toUpperCase().match(upperText)
                || fullName.toUpperCase().match(upperText)
                || item.email.toUpperCase().match(upperText)
        });
        this.setState({
            data: newData
        });
    };

    _renderHeader = () => (
        <View>
            <Header
                type='noElevation'
                label='FRIEND LIST'
                onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            />
            <SearchBar
                onSearchTextChange={this._onSearchTextChange}
            />
        </View>
    );

    _renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => this._onPressItem(item)}
            style={styles.container}>
            <Image
                style={styles.avatar}
                resizeMode='cover'
                source={item.photo}
            />
            <View style={styles.details}>
                <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </TouchableOpacity>
    );

    _keyExtractor = (item) => item.id.toString();

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
    email: {
        fontSize: scale(14),
        color: '#999',
    },
});

export {FriendList};

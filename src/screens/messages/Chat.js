import React from 'react';
import {Dimensions, FlatList, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {chats, users} from '../../data';
import {Header} from "../../components";
import {NavigationActions} from "react-navigation";
import {scale} from "../../utils/scale";

class Chat extends React.Component{
    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id', 1);
        this.state = {
            data: chats.find(item => item.withUserId == id),
            users: users.find(item => item.id == id),
            message: '',
        };
    }

    _setListRef = (ref) => {
        this.listRef = ref
    };

    _scrollToEnd = () => {
        this.listRef && this.listRef.scrollToEnd({animated: true})
    };

    _onTextInputChange = (text) => {
        this.setState({message: text})
    };

    _onPressSendButton = () => {
        let newMessage = null;
        let newData = this.state.data;
        if (this.state.message !== ''){
            newMessage = {
                id: newData.messages.length, type: 'out', text: this.state.message,
            };
            newData.messages.push(newMessage);
            this.setState({
                data: newData,
                message: '',
            });
        }
        Keyboard.dismiss();
    };

    _renderHeader = () => (
        <View>
            <Header
                type='normal'
                label='CHAT'
                onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            />
        </View>
    );

    _renderItem = ({item}) => (
        item.type === 'in'
        ?
            <View style={[styles.itemContainer, {flexDirection: 'row'}]}>
                <Image
                    style={styles.avatar}
                    resizeMode='cover'
                    source={this.state.users.photo}
                />
                <View style={{flex: 1}}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, {color: 'black'}]}>{item.text}</Text>
                    </View>
                </View>
            </View>
        :
            <View style={[styles.itemContainer, {flexDirection: 'row-reverse'}]}>
                <View style={styles.textContainerReverse}>
                    <Text style={[styles.text, {color: 'white', marginRight: 5}]}>{item.text}</Text>
                </View>
            </View>
    );

    _keyExtractor = (item) => item.id.toString();

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    extraData={this.state}
                    data={this.state.data.messages}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._renderHeader}
                    ref={this._setListRef}
                    onLayout={this._scrollToEnd}
                    onContentSizeChange={this._scrollToEnd}
                />
                <View style={styles.chatContainer}>
                    <View style={styles.plusButton}>
                        <Icon
                            name="plus"
                            color='#bcbcbc'
                            size={scale(24)}
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            onFocus={this._scrollToEnd}
                            onChangeText={this._onTextInputChange}
                            value={this.state.message}
                            style={styles.textInput}
                            placeholder='Type here to chat'
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this._onPressSendButton}
                        activeOpacity={0.8}
                        style={styles.sendButton}>
                        <Icon
                            name="send"
                            color='white'
                            size={scale(24)}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 10
    },
    chatContainer: {
        flexDirection: 'row',
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
    },
    plusButton: {
        marginHorizontal: 12,
    },
    sendButton: {
        backgroundColor: '#ff6b5c',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    textInputContainer: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 35,
        backgroundColor: 'white',
        marginVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        fontSize: scale(16),
        color: 'black',
    },
    avatar: {
        width: scale(35),
        height: scale(35),
        borderRadius: 30,
        marginHorizontal: 10,
    },
    text: {
        fontSize: scale(16),
        lineHeight: scale(22.5),
    },
    textContainer: {
        borderRadius: 20,
        backgroundColor: '#e5e5e5',
        marginRight: scale(35)+20,
        paddingVertical: 8,
        paddingLeft: 12,
    },
    textContainerReverse: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#41abe1',
        marginLeft: scale(35)+60,
        marginRight: 20,
        paddingVertical: 8,
        paddingLeft: 12,
    }
});

export {Chat};

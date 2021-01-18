import React from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity, Text} from 'react-native';
import {articles} from './data';
import {Card} from "./components";
import Icon from 'react-native-vector-icons/FontAwesome';
import {scale, scaleVertical} from "./utils/scale";

class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: articles,
        }
    }

    _renderHeader = () => (
        <View style={[styles.container, {backgroundColor: '#ffffff', elevation: 8}]}>
            <View style={styles.split}>
                <TouchableOpacity
                    // onPress={this.props.onPress}
                    style={styles.leftIcon}>
                    <Icon
                        name="chevron-left"
                        color='black'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.split, {alignItems: 'center'}]}>
                <Text style={[styles.headerLabel, {color: 'black'}]}>TEST</Text>
            </View>
            <View style={styles.split}/>
        </View>
    );

    _renderItem = ({item}) => (
        <Card
            type='full'
            photo={item.photo}
            header={item.header}
            text={item.text}
        />
    );

    _keyExtractor = (item) => item.id.toString();

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: scaleVertical(58),
        width: '100%',
        flexDirection: 'row',
    },
    split:{
        flex: 1,
        justifyContent: 'center',
    },
    leftIcon:{
        paddingLeft: 12
    },
    headerLabel:{
        fontWeight: 'bold',
        fontSize: scale(16),
    }
});

export {Test};

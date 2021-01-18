import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {articles} from '../../data';
import {Header, Card} from "../../components";
import {NavigationActions} from "react-navigation";

class ArticleV1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: articles,
        }
    }

    _renderHeader = () => (
        <Header
            type='normal'
            label='ARTICLE V1'
            onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
        />
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
                    ListHeaderComponent={this._renderHeader}
                />
            </View>
        );
    }
}

export {ArticleV1};

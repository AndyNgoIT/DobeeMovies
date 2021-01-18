import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {GalleryItem, Header} from "../../components";

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentWillMount() {
        const items = [];
        const size = 500;
        // Math.floor(Math.random()*(max-min+1)+min)
        const max = 41;
        const randMax = 100;
        for (let i = 0; i < max; i++) {
            let randomNumber = Math.floor((Math.random() * randMax) + 1);
            const idExists = (e) => e.id === randomNumber;
            while (items.findIndex(idExists) > -1) {
                randomNumber = Math.floor((Math.random() * randMax) + 1);
            }

            items.push({ url: `https://picsum.photos/${size}/${size}?image=${randomNumber}`, id: randomNumber });
        }
        this.setState({ ...this.state, items });
    }

    _renderHeader = () => {
        switch (this.props.headerType) {
            case 'none':
                return null;
            default:
                return (
                    <Header
                        type='normal'
                        label='GALLERY'
                        onPress={() => this.props.navigation.goBack()}
                    />
                );
        }
    };

    _renderItem = ({item}) => (
        <GalleryItem
            type={'normal'}
            url={item.url}
            // onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id.toString();

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._renderHeader}
                    data={this.state.items}
                    numColumns={3}
                    keyExtractor={this._keyExtractor}/>
            </View>
        );
    }
}

export {Gallery};


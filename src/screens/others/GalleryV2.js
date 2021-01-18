import React from 'react';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import {GalleryItem, Header} from "../../components";
import {scaleImage} from '../../utils/scale';

class GalleryV2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataLeft: [],
            dataRight: [],
        };
    }

    componentWillMount() {
        const dataRight = [];
        const dataLeft = [];
        const sizeMax = 800;
        const sizeMin = 500;
        const max = 30;
        const randMax = 100;
        for (let i = 0; i < max; i++) {
            let height = Math.floor(Math.random()*(sizeMax-sizeMin+1)+sizeMin);
            let width = Math.floor(Math.random()*(sizeMax-sizeMin+1)+sizeMin);
            let randomNumber = Math.floor((Math.random() * randMax) + 1);
            const idExists = (e) => e.id === randomNumber;
            while (dataLeft.findIndex(idExists) > -1) {
                randomNumber = Math.floor((Math.random() * randMax) + 1);
            }
            dataLeft.push({
                url: `https://picsum.photos/${width}/${height}?image=${randomNumber}`,
                id: randomNumber,
                width: width,
                height: height,
            });
        }
        for (let i = 0; i < max; i++) {
            let height = Math.floor(Math.random()*(sizeMax-sizeMin+1)+sizeMin);
            let width = Math.floor(Math.random()*(sizeMax-sizeMin+1)+sizeMin);
            let randomNumber = Math.floor((Math.random() * randMax) + 1);
            const idExists = (e) => e.id === randomNumber;
            while (dataRight.findIndex(idExists) > -1) {
                randomNumber = Math.floor((Math.random() * randMax) + 1);
            }
            dataRight.push({
                url: `https://picsum.photos/${width}/${height}?image=${randomNumber}`,
                id: randomNumber,
                width: width,
                height: height,
            });
        }
        this.setState({ dataLeft: dataLeft, dataRight: dataRight });
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
            type={'mansory'}
            url={item.url}
            ratio={item.width/item.height}
            // onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = (item) => item.id.toString();

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    style={styles.scrollView}>
                    {this._renderHeader()}
                    <FlatList
                        renderItem={this._renderItem}
                        data={this.state.dataLeft}
                        numColumns={1}
                        keyExtractor={this._keyExtractor}/>
                    <FlatList
                        renderItem={this._renderItem}
                        data={this.state.dataRight}
                        numColumns={1}
                        keyExtractor={this._keyExtractor}/>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white'
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export {GalleryV2};

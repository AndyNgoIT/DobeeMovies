import React, { Component } from 'react';
import { 
    Text, 
    View,
    FlatList,
    TouchableOpacity, 
    Alert,
    } from 'react-native';
import FastImage from 'react-native-fast-image';
import moviesData from "../assets/data.json";

export default class MoviesComponent extends Component {
    render() {
        return (
            <View>
                <FlatList   
                  horizontal
                  data={moviesData.results}
                  keyExtractor={(item, index) => index.toString()} 
                  renderItem={ ({ item }) => this.renderItem(item)}/> 
            </View>
        )
    }

    renderItem(item) {
        const {width, height, marginHorizontal, marginBottom, borderRadius, marginRight } = this.props;
        return (
            <TouchableOpacity 
               onPress = {() => Alert.alert('PHIM: ', item.title || item.name)}
               style={{marginBottom: 10,}}>
                <View style={{ marginHorizontal, }}>
                    <FastImage 
                      source={{
                         uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                         }}
                         style={{
                             width,
                             height,
                             borderRadius,
                             marginRight,
                             marginBottom
                         }}
                         resizeMode= 'cover'
                         />
                     <View style={{flex: 1,}}>
                       <Text style={{
                         marginBottom,
                         marginRight,
                         fontSize: 14, 
                         fontFamily: 'san-serif', 
                         fontWeight: 'bold',
                         }}>{item.title || item.name}</Text>
                </View>
              </View> 
            </TouchableOpacity>
        );
    }
}

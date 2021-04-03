import React, { PureComponent } from 'react';
import { 
    Text, 
    View,
    FlatList,
    TouchableOpacity, 
    Alert,
    CheckBox,
    } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TextInput } from 'react-native-gesture-handler';
import moviesData from "../assets/data.json";

export default class MoviesComponent extends PureComponent {
    render() {
        const { horizontal } = this.props;
        return (
            <View>
                <FlatList   
                  horizontal = {horizontal}
                  data={moviesData.results}
                  keyExtractor={(item, index) => index.toString()} 
                  renderItem={ ({ item }) => this.renderItem(item)}/> 
            </View>
        )
    }

    renderItem(item) {
        const {height, marginHorizontal, maxWidth, marginBottom, borderRadius, marginRight, pressItem, flexDirection } = this.props;
        return (
            <TouchableOpacity 
               onPress = {() => pressItem()}
               style={{marginBottom: 10,}}>
                <View style={{ marginHorizontal, flexDirection}}>
                    <FastImage 
                      source={{
                         uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                         }}
                         style={{
                             maxWidth,
                             height,
                             borderRadius,
                             marginRight,
                             marginBottom,
                         }}
                         resizeMode= 'cover'
                         />
                     <View style={{flex: 1,}}>
                       <Text style={{
                         marginBottom,
                         marginRight,
                         fontSize: 14, 
                         maxWidth,
                         fontFamily: 'san-serif', 
                         fontWeight: 'bold',
                         }}>{item.title}</Text>

                        <Text style={{
                            fontSize: 12, 
                            fontWeight: 'bold'}} >Lượt xem: {item.popularity}</Text> 
                     </View>
                </View> 
            </TouchableOpacity>
        );
    }
}

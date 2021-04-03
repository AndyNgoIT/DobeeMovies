import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity 
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import { HeaderComponent, MoviesComponent } from '../components';

class PlaylistItem extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                    <HeaderComponent title = {'Danh Sách 1'} 
                        fontWeight={'bold'} 
                        fontSize={24} 
                        color={'#001f45'}
                        textAlign={'center'} />
                    <View style={{marginHorizontal: 21}}>
                        <Text>Danh sách của bạn có {this.props.movies.current.length} phim</Text>
                        <FlatList 
                            data={this.props.movies.current} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ ( {item} ) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{flexDirection: 'row', marginVertical: 15}}>
                                            <FastImage 
                                                source={{
                                                    uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                                                    }}
                                                    style={{
                                                        width: 73, 
                                                        height: 89, 
                                                        borderRadius: 10,
                                                        marginRight: 10
                                                    }}
                                                />
                            
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={{
                                                    fontSize: 15,
                                                    maxWidth: 165, 
                                                    fontFamily: 'san-serif', 
                                                    fontWeight: 'bold',
                                                    marginTop: 10,
                                                    }}>{item.title}</Text>
                                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Lượt Xem: {item.popularity}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    const { movies } = state
    return { movies }
}

export default connect(mapStateToProps)(PlaylistItem)

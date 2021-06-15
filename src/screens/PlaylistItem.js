import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity 
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HeaderComponent, MoviesComponent } from '../components';
import { removeMovie } from '../../redux/action';

class PlaylistItem extends PureComponent {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                    <HeaderComponent title = {'Danh Sách Phát 1'} 
                        fontWeight={'bold'} 
                        fontSize={24} 
                        color={'#001f45'}
                        textAlign={'center'} />

                    <View style={{marginHorizontal: 21}}>

                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginVertical: 13
                        }}>Có {this.props.movies.current.length} phim</Text>
                        <FlatList 
                            data={this.props.movies.current} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ ( {item} ) => {
                                return (
                                   <TouchableOpacity>
                                        <View style={{flexDirection: 'row', marginVertical: 15}}>
                                            <FastImage 
                                                source={{
                                                    uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.movie.movie.poster_path}`,
                                                    }}
                                                    style={{
                                                        width: 73, 
                                                        height: 89, 
                                                        borderRadius: 10,
                                                        marginRight: 10
                                                    }}
                                                />
                                            <View>
                                                <Text style={{
                                                    fontSize: 15,
                                                    maxWidth: 208, 
                                                    fontFamily: 'san-serif', 
                                                    fontWeight: 'bold',
                                                    marginTop: 7,
                                                    }}>{item.movie.movie.title}</Text>

                                                <Text style={{fontSize: 12, marginTop: 10}}>Lượt Xem: {item.movie.movie.popularity}</Text>
                                            </View>
                                            <TouchableOpacity style={{
                                                marginLeft: 40,
                                                marginTop: 16,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }}
                                                onPress={() => {
                                                    this.props.removeMovie(item.movie.movie)
                                                }}>
                                                <FontAwesome5 name='trash' size={20} color='#888' />
                                            </TouchableOpacity>
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        removeMovie,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem)

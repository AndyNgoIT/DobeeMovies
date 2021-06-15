import React, { Component } from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity,
    Alert,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';

export default class DetailScreen extends Component {
    render() {
        let movie = this.props.navigation.state.params;
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                    <View style={{paddingVertical: 12,}}>
                       <Text 
                       style={{
                           fontWeight: 'bold', 
                           fontSize: 28, 
                           color: '#001f45',
                           textAlign: 'center',
                           }}>Chi Tiết</Text>
                    </View>

                    <View style={{marginHorizontal: 21,}}>
                        <View>
                            <FastImage 
                                source= {{
                                    uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`,
                                }}
                            style = {{width: 300, height: 304,  borderRadius: 6, }} 
                            resizeMode = 'cover'
                            />
                        </View>

                        <View>
                            <Text style={{
                                fontSize: 28, 
                                fontFamily: 'san-serif', 
                                fontWeight: 'bold',
                                color: '#001f45'
                            }}>{movie.title || movie.name}</Text>

                            <View style={{flexDirection: 'row', paddingVertical: 6, }}>
                                <Text style={{fontWeight: 'bold', }}>
                                    {movie.release_date || movie.first_air_date} 
                                </Text>

                                <Text style={{fontWeight: 'bold', }}>  Lượt Xem: {movie.popularity}</Text>
                            </View>

                            <View style = {{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
                                <TouchableOpacity 
                                    onPress = {() => Alert.alert('Bạn đã thích bộ phim này!')}
                                    style={{
                                        marginRight: 20,
                                    }}
                                >
                                    <FontAwesome5 name="heart" size={30}  color= '#001f45' />
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                        marginRight: 20,
                                    }}>
                                    <FontAwesome5 name="plus-circle" size={30} color= '#001f45'  />
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                        marginRight: 15,
                                    }}>
                                    <FontAwesome5 name="share" size={30} color= '#001f45' />
                                </TouchableOpacity>

                                <TouchableOpacity style={Style.linearGradient}>
                                        <Text style= {[Style.buttonText]}>
                                            <FontAwesome5 name="play" size={20} color='#fff' marginRight= {60}/>
                                            Xem Trailer
                                        </Text>  
                                </TouchableOpacity>
                            </View>

                            <Text style={{
                                fontStyle: 'normal',
                                fontSize: 16,
                                fontWeight: '400',
                                lineHeight: 24,
                                marginBottom: 15
                            }}>Nội Dung Phim:  {movie.overview}</Text>

                            <Text style={[Style.detailInfor]}>Ngôn Ngữ: {movie.original_language}</Text>
                            <Text style={[Style.detailInfor]}>Cung cấp bới: themoviedb.org</Text>
                    
                        </View>

                        <View style={{flex: 1, marginVertical: 15}}>
                            <Text style={{
                                paddingVertical: 15, 
                                fontFamily: 'san-serif', 
                                color: '#001F45',
                                fontWeight: 'bold',
                                fontSize: 22,
                            }}>Thảo Luận</Text>
                            <View style={{flexDirection: 'row', marginVertical: 10 }}>
                             
                                <FontAwesome5 name="star" size={12} color="#FFA44D" />
                                <Text> {movie.vote_average}/10 </Text>
                                <Text> ({movie.vote_count})</Text>
                            </View>

                            <View>
                                <TextInput 
                                    placeholder= "bình luận"
                                    maxLength = {99999}
                                    style = {{
                                        paddingVertical: 8,
                                        borderColor: '#bbbfbf',
                                        borderBottomWidth: 2,
                                        borderLeftWidth: 2,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        borderRadius: 10,
                                        fontSize: 15
                                    }}
                                />
                                <TouchableOpacity style = {{
                                    marginVertical: 10,
                                    backgroundColor: '#dcdcdc',
                                    width: 208,
                                    borderRadius: 20,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10
                                    
                                }}>
                                    <Text style={{
                                        textAlign: 'center', 
                                        fontWeight: 'bold',
                                        fontStyle: 'normal',
                                        fontSize: 15
                                        }}>Bình Luận</Text>
                                </TouchableOpacity>
                            </View>
 
                        </View>
                    </View>

                    <View style={{marginHorizontal: 21,}}>
                        <Text style={{
                                paddingVertical: 15, 
                                fontFamily: 'san-serif', 
                                color: '#001F45',
                                fontWeight: 'bold',
                                fontSize: 22,
                            }}>Liên Quan</Text>  
                        <Text>COMING_SOON</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const Style = StyleSheet.create({
    linearGradient: {
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 190,
        backgroundColor: '#31a3f5',
        marginLeft: 20,
     },
    buttonText: {
        fontFamily: 'Roboto-Relugar',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
      },
    detailInfor: {
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '600',

    },
})
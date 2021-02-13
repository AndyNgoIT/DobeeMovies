import React, { Component } from 'react';
import { 
    Text, 
    View, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView,
    ScrollView 
} from 'react-native';
import { HeaderComponent } from '../components';
import FastImage from 'react-native-fast-image';
import moviesData from "../assets/data.json";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>  
                  <HeaderComponent/>
                  <View>
                      <FlatList   
                        horizontal = {true} 
                        style={{marginLeft: 21}}
                        data={moviesData.results}
                        keyExtractor={(item, index) => index.toString()} 
                        renderItem={ ({ item }) => {
                            return (
                               <TouchableOpacity 
                                  onPress = {() => this.props.navigation.navigate('DetailScreen')}
                                  style={{marginRight: 18}}>
                                   <View style={{flex: 1,}}>
                                       <FastImage 
                                        source={{
                                            uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                                            }}
                                            style={{
                                                width: 150, 
                                                height: 220, 
                                                borderRadius: 16,
                                            }}
                                            resizeMode= 'cover'
                                            />
                                       <Text style={{
                                           fontSize: 12, 
                                           fontFamily: 'san-serif', 
                                           fontWeight: 'bold',
                                           marginTop: 10,
                                           }}>{item.title || item.name}</Text>
                        
                                       <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                           <Text style={{color: '#FFA44D', fontSize: 12}}>{item.vote_average}/10</Text>
                                           <FontAwesome5 name="star" size={10} color="#FFA44D" />
                                       </View>
                                   </View>
                               </TouchableOpacity>
                            );
                        }}
                      />
                    </View>
                    
                    <View style={{flex: 1, marginHorizontal: 21}}>
                        <Text style={{
                            paddingVertical: 15, 
                            fontFamily: 'san-serif', 
                            color: '#001F45',
                            fontWeight: 'bold',
                            fontSize: 20,
                            }}>Thịnh Hành</Text>
                        <FlatList   
                         data={moviesData.results}
                         keyExtractor={(item, index) => index.toString()} 
                         renderItem={ ({ item }) => {
                            return (
                               <TouchableOpacity 
                                  onPress = {() => this.props.navigation.navigate('DetailScreen')}
                                  style={{marginBottom: 10,}}>
                                   <View style={{flexDirection: 'row'}}>
                                       <FastImage 
                                         source={{
                                            uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                                            }}
                                            style={{
                                                width: 73, 
                                                height: 89, 
                                                borderRadius: 5,
                                                marginRight: 10,
                                            }}
                                            resizeMode= 'cover'
                                            />
                                        <View style={{flex: 1, flexDirection: 'column'}}>
                                         <Text style={{
                                           fontSize: 14, 
                                           fontFamily: 'san-serif', 
                                           fontWeight: 'bold',
                                           }}>{item.title || item.name}</Text>
                                           
                                         <Text style={{
                                           fontSize: 12,  
                                           fontWeight: 'bold',
                                           marginVertical: 8,
                                           }}>Ngày sản xuất: {item.release_date || item.first_air_date}</Text>

                                         <Text numberOfLines={2} style={{
                                           fontSize: 12, 
                                           fontWeight: '300',
                                           }}>
                                             {item.overview.substring(0, 60)}...
                                         </Text>
                                        </View>
                                    </View> 
                               </TouchableOpacity>
                            );
                        }} />
                    </View>  
                </ScrollView>    
            </SafeAreaView>
        )
    }
}
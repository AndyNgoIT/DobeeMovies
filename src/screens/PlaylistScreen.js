import React, { Component } from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity, 
    Alert,
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { HeaderComponent } from '../components';

export default class PlaylistScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1, marginHorizontal: 21}}>
                <ScrollView>
                   <HeaderComponent title = {'Danh Sách Phát'} 
                        fontWeight={'bold'} 
                        fontSize={24} 
                        color={'#001f45'} />

                   <View style = {{flexDirection: 'row'}}>
                       <TouchableOpacity style = {{flexDirection: 'row', marginVertical: 12 }}
                            onPress = {() => Alert.alert('COMING_SOON')}
                       >
                            <FontAwesome5 name="plus" size={24} color='#357ef2' />
                            <Text style={{color: '#357ef2', marginHorizontal: 10, fontSize: 18}}>
                                Tạo danh sách phát mới
                            </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style = {{marginLeft: 85, marginVertical: 12}} >
                           <FontAwesome5 name="sort-alpha-down" size={28} color='#333' />
                       </TouchableOpacity>
                   </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

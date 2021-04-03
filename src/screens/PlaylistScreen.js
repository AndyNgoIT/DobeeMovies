import React, { PureComponent } from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity, 
    Alert,
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { HeaderComponent, MoviesComponent } from '../components';

export default class PlaylistScreen extends PureComponent {

    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                   <HeaderComponent title = {'Danh Sách Phát'} 
                        fontWeight={'bold'} 
                        fontSize={28} 
                        color={'#001f45'} />

                   <View style = {{flexDirection: 'row', marginHorizontal: 21}}>
                       <TouchableOpacity style = {{flexDirection: 'row', marginVertical: 12 }}
                           onPress= {() => this.props.navigation.navigate('Movies')} >
                            <FontAwesome5 name="plus" size={24} color='#357ef2' />
                            <Text style={{color: '#357ef2', marginHorizontal: 10, fontSize: 18}}>
                                Danh sách phát mới
                            </Text>
                       </TouchableOpacity>


                       <TouchableOpacity style = {{marginLeft: 85, marginVertical: 12}} >
                           <FontAwesome5 name="sort-alpha-down" size={28} color='#333' />
                       </TouchableOpacity>

                   </View>

                   <View style={{marginVertical: 12, marginHorizontal: 21}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PlaylistItem')}>
                            
                            <Text style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                            }}>Danh Sách 1</Text>
                        </TouchableOpacity>
                   </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

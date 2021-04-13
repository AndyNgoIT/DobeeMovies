import React, { PureComponent } from 'react';
import { Text,
      SafeAreaView,
      View,
      Image,
      TouchableOpacity,
      ScrollView,
      StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

export default class ProfileScreen extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        userData: [],
        email: '',
        name: ''
      }
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
               <ScrollView contentContainerStyle = {{flexGrow: 1}}>
                    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 21}}>
                        <View style={{alignItems: 'center', marginTop: 30,}}>
                            <FastImage 
                              source = { require('../assets/images/avatar.webp')} 
                              style={{width: 100, height: 100, borderRadius: 50,}} />
                        </View>

                        <View style={[styles.textStyle, {alignItems: 'center', marginBottom: 20}]}>
                          <Text style={{fontWeight: 'bold', fontSize: 25,}}></Text>
                          <Text></Text>
                        </View>

                        <TouchableOpacity 
                           style = {{alignItems: 'center'}}
                           onPress = {() => this.props.navigation.navigate('LoginScreen')}>
                          <LinearGradient 
                             start = {{x: 0, y: 0}}
                             end = {{x: 1, y: 0}}
                             colors = {['#001f45', '#004aad']} 
                             style = {styles.linearGradient}>
                            <Text style={styles.buttonText}>Đăng Xuất</Text>
                          </LinearGradient>
                        </TouchableOpacity>
       
                        <View style={{alignItems: 'center', marginTop: 180}}>
                          <TouchableOpacity onPress = {() => this.props.navigation.navigate('InforappScreen')}>
                             <Text style= {{color: '#7f7f7f'}}>Thông tin về ứng dụng</Text>
                          </TouchableOpacity>

                          <TouchableOpacity 
                           style={{marginTop: 10}}
                           >
                             <Text style= {{color: '#7f7f7f'}}>Báo lỗi / Yêu cầu tính năng</Text>
                          </TouchableOpacity>
                        </View>
                   </View>
               </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
      textStyle: {
        paddingVertical: 21,
      },
      linearGradient: {
          borderRadius: 27,
          paddingVertical: 10,
          paddingHorizontal: 30,
          width: 208,
      },
      buttonText: {
        fontFamily: 'Roboto-Relugar',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
      }
}); 
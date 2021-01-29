import React, { Component } from 'react'
import { 
    Text,
    SafeAreaView, 
    TouchableOpacity, 
    View,
    ScrollView,
    StyleSheet, 
    TextInput
} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


export default class LoginScreen extends Component {
    render() {
        return (
            <SafeAreaView style= {{flex: 1}} >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                   <View style = {{flex: 1, justifyContent: 'center', paddingHorizontal: 21}}>
                      <View style={Style.container}>
                           <Text style={Style.logo}>DOBEE MOVIES</Text>
                      </View>

                      <View style= {{alignItems: 'center'}}>
                         <Text style={[Style.logoSub, {marginTop: 30}]}>Đăng Nhập</Text>
                      </View>  

                      <View style={{marginTop: 21, marginBottom: 10,}}>
                        <Text>Email </Text>
                        <TextInput 
                          placeholder="dobeeteam@nbdong.com"
                          keyboardType="email-address"
                          style={{ 
                            borderBottomColor: '#707070',
                            borderBottomWidth: 2,
                            paddingHorizontal: 5,
                            paddingVertical: 8,
                          }}/>
                      </View>

                      <View style={{marginBottom: 21, marginTop: 10,}}>
                        <Text>Mật Khẩu</Text>
                        <TextInput 
                         placeholder="password"
                         secureTextEntry={true}
                         style={{ 
                           borderBottomColor: '#707070',
                           borderBottomWidth: 2,
                           paddingHorizontal: 5,
                           paddingVertical: 8,
                           fontSize: 16,
                          }} />
                      </View>

                      <TouchableOpacity 
                         onPress = { () => this.props.navigation.navigate('DashBoard')}
                         style={{alignItems: 'center'}}>
                          <LinearGradient 
                             start={{x: 0, y: 0}} 
                             end={{x: 1, y: 0}}
                             colors={['#001F45', '#45003D']} 
                             style={Style.linearGradient}>
                             <Text style={Style.buttonText}>Đăng Nhập</Text>
                          </LinearGradient>
                      </TouchableOpacity>

                      <View style={{alignContent: 'center', marginTop: 180, marginBottom: -30,}}>
                           <Text style={{textAlign: 'center'}}>
                               Bạn chưa có tài khoản?
                               <TouchableOpacity>
                                 <Text style={{color: '#3391f5'}}> Đăng Ký Ngay</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>
                </ScrollView>  
            </SafeAreaView>  
        );
    }
}

const Style = StyleSheet.create({
    container: {
         alignItems: 'center',
     },
    logo: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#001F45',
        //marginTop: 50,
    },
    logoSub: {
        fontWeight: 'normal',
        fontSize: 26,
        color: '#001F45',
    },
    linearGradient: {
       borderRadius: 27,
       paddingVertical: 10,
       paddingHorizontal: 30,
       width: 208,
    },
    buttonText: {
      fontFamily: 'Roboto-Relugar',
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
});
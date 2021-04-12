import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

export default class RegisterScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    postDataUser() {
        axios.post({
            method: 'post',
            url: 'http://10.0.2.2:3000/users',
            data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            },
        })
        
        console.log(this.state.password)
    }

    render() {
        return (
            <SafeAreaView style= {{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style= {{alignItems: 'center'}}>
                        <Text style={[Style.logo]}>Đăng Ký Thành Viên</Text>
                        <Text style={[Style.logoSub, {marginVertical: 30}]}>Cùng nhau tham gia cộng đồng DobeeTeam !</Text>
                    </View>  
                    <View style={{marginBottom: 10, marginHorizontal: 21}}>
                        <Text>Tên Của Bạn </Text>
                        <TextInput 
                          placeholder="VD. Ngo Van A"
                          keyboardType=""
                          onChangeText={(name) => this.setState({name: name})}
                          style={{ 
                            borderBottomColor: '#707070',
                            borderBottomWidth: 2,
                            paddingHorizontal: 5,
                            paddingVertical: 8,
                          }}/>
                      </View>
                    <View style={{marginTop: 21, marginBottom: 10, marginHorizontal: 21}}>
                        <Text>Email </Text>
                        <TextInput 
                          placeholder="example@gmail.com"
                          keyboardType="email-address"
                          onChangeText={(email) => this.setState({email: email})}
                          style={{ 
                            borderBottomColor: '#707070',
                            borderBottomWidth: 2,
                            paddingHorizontal: 5,
                            paddingVertical: 8,
                          }}/>
                      </View>

                      <View style={{marginBottom: 21, marginTop: 21, marginHorizontal: 21}}>
                        <Text>Mật Khẩu</Text>
                        <TextInput 
                         placeholder="password"
                         secureTextEntry={true}
                         onChangeText={(password) => this.setState({password: password})}
                         style={{ 
                           borderBottomColor: '#707070',
                           borderBottomWidth: 2,
                           paddingHorizontal: 5,
                           paddingVertical: 8,
                           //fontSize: 16,
                          }} />
                      </View>

                      <TouchableOpacity 
                         style={{alignItems: 'center'}}
                         onPress={() => this.postDataUser()}
                        >
                          <LinearGradient 
                             start={{x: 0, y: 0}} 
                             end={{x: 1, y: 0}}
                             colors={['#001F45', '#45003D']} 
                             style={Style.linearGradient}>
                             <Text style={Style.buttonText}>Đăng Ký</Text>
                          </LinearGradient>
                      </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const Style = StyleSheet.create({
    container: {
         alignItems: 'center',
     },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#001F45',
        marginTop: 40,
    },
    logoSub: {
        fontWeight: 'normal',
        fontSize: 20,
        color: '#001F45',
        textAlign: 'center'
    },
    linearGradient: {
       borderRadius: 27,
       paddingVertical: 10,
       paddingHorizontal: 30,
       width: 230,
    },
    buttonText: {
      fontFamily: 'Roboto-Relugar',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
    },
});
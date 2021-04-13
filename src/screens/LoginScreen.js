import axios from 'axios';
import React, { PureComponent } from 'react'
import { 
    Text,
    SafeAreaView, 
    TouchableOpacity, 
    View,
    ScrollView,
    StyleSheet, 
    TextInput,
    Alert
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default class LoginScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleButton = () => {
       axios({
           method: 'post',
           url: 'http://10.0.2.2:3000/user/email',
           data: {
                email: this.state.email,
                password: this.state.password
            },
       })
       .then( (response) => {
           console.log(response.data);
           if (response.data.status === 200 && response.data.data.data.error === false) {
                alert(response.data.data.data.data.Email)
                this.props.navigation.navigate('DashBoard')
            
           } else {
               alert(response.data.data.data.message)
           } 
       })
    }

    render() {
        return (
            <SafeAreaView style= {{flex: 1, backgroundColor: '#fff'}} >
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
                          placeholder="example@gmail.com"
                          keyboardType="email-address"
                          onChangeText={email => this.setState({email})}
                          value={this.state.email}
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
                         onChangeText={password => this.setState({password})}
                         value={this.state.password}
                         secureTextEntry={true}
                         style={{ 
                           borderBottomColor: '#707070',
                           borderBottomWidth: 2,
                           paddingHorizontal: 5,
                           paddingVertical: 8,
                           //fontSize: 16,
                          }} />
                      </View>

                      <TouchableOpacity 
                         onPress = { this.handleButton() }
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
                           <Text style={{textAlign: 'center', alignItems: 'center', fontSize: 15}}>
                               Bạn chưa có tài khoản?
                               <TouchableOpacity onPress={()=> this.props.navigation.navigate('RegisterScreen')}>
                                 <Text style={{color: '#3391f5', fontSize: 15}}> Đăng Ký Ngay</Text>
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
       width: 250,
    },
    buttonText: {
      fontFamily: 'Roboto-Relugar',
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
    },
});
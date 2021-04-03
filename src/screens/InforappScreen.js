import React, { Component } from 'react';
import { 
    Text, 
    View,
    SafeAreaView,
    
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { HeaderComponent } from '../components';

export default class InforappScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{color: '#ebeef0'}}>
                <HeaderComponent title={'Thông tin về Ứng dụng'}
                    fontWeight= {'bold'}
                    fontSize={24}
                    color={'#001f45'}
                    textAlign={'center'} />

                <View style = {{marginTop: 15, marginHorizontal: 21,}}>
                    <Text style={{color: '#7f7f7f'}}>Tác giả</Text>

                    <View style={{alignItems: 'center', marginTop: 30,}}>
                       <FastImage 
                         source = { require('../assets/images/dong.webp') }
                         style = {{ width: 150, height: 150, borderRadius: 70}} />
                       <Text  style={{
                           fontSize: 23, 
                           fontFamily: 'san-serif', 
                           color: '#001f45',
                           fontWeight: 'bold',
                           marginBottom: 17,
                           marginTop: 10,
                           }} >A.D Đông Ngô
                            <FastImage  source={ require('../assets/images/tich-xanh.webp')} 
                                style={{width: 18, height: 18,}} />
                       </Text>
                       <Text  style={{fontSize: 15, fontFamily: 'san-serif', color: '#001f45'}} >@AndyNgoJs</Text>
                    </View>

                    <View style={{
                        alignItems: 'baseline', 
                        marginTop: 30, 
                        marginHorizontal: 21, 
                        }}>
                        <Text 
                         numberOfLines={7}
                         style={{
                             fontSize: 14, 
                             fontFamily: 'san-serif', 
                             color: '#001f45'
                             }} >Ứng dụng này là một sản phẩm nhỏ của mình muốn hướng tới mục đích cộng đồng. Tuy nhiên, trong quá trình phát triển do thiếu hụt về đầu tư và kinh phí, ứng dụng có thể còn nhiều vấn đề. Đương nhiên mình vẫn đang cố khắc phục để mang lại một trải nghiệm tốt nhất cho mọi người. </Text>

                        <Text style={{fontSize: 14, color: '#001f45', marginTop: 5, }}>
                            Cảm ơn bạn vì đã sử dụng ứng dụng này!
                        </Text>
                    </View>

                    <Text  style={{
                        fontSize: 15, 
                        fontFamily: 'san-serif', 
                        color: '#001f45',
                        marginTop: 30,
                        marginHorizontal: 10,
                        }} >VERSION: 0.0.1</Text>
                </View>
            </SafeAreaView>
        )
    }
}

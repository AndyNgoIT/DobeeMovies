import React from "react";
import {View, StyleSheet, Text, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity, TextInput} from "react-native";
import {GradientButton} from '../../components';
import {scaleVertical, scaleModerate, scale} from '../../utils/scale';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenSize = Dimensions.get('window');

class LogIn extends React.Component{

    _onLogInButtonPressed = () => this.props.navigation.goBack();

    _onSignUpButtonPressed = () => this.props.navigation.navigate('signUp');

    render(): React.ReactNode {
        return (
            <KeyboardAvoidingView
                behavior="position"
                enabled
                style={styles.screen}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/login-image.png')}
                />
                <View style={styles.container}>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="twitter"
                                color='#41abe1'
                                size={scale(33)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="facebook-f"
                                color='#41abe1'
                                size={scale(33)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="google"
                                color='#41abe1'
                                size={scale(33)}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            textContentType='username'
                            placeholder='Username'
                            placeholderTextColor='#707070'/>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            textContentType='password'
                            placeholder='Password'
                            placeholderTextColor='#707070'/>
                    </View>
                    <GradientButton
                        height={scaleVertical(56)}
                        marginVertical={10}
                        text='LOGIN'
                        fontSize={scale(20)}
                        beginColor='#14F1D9'
                        endColor='#3672F8'
                        onPress={this._onLogInButtonPressed}
                    />
                    <View style={styles.footer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._onSignUpButtonPressed}
                            style={styles.textRow}>
                            <Text style={styles.text}>Don’t have an account? </Text>
                            <Text style={styles.textBold}>
                                Sign up now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: screenSize.width,
        height: screenSize.height - scaleModerate(375, 1),
        resizeMode: 'cover',
        marginBottom: scaleVertical(10),
    },
    container: {
        paddingHorizontal: 17,
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1,
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 14,
        height: scale(62),
        width: scale(62),
        borderRadius: scale(31),
        borderWidth: 2,
        borderColor: '#41abe1',
        backgroundColor: '#ffffff',
    },
    textInputContainer: {
        height: scaleVertical(58),
        borderWidth: 1,
        borderColor: '#0000003B',
        borderRadius: 28,
        alignSelf: 'stretch',
        paddingHorizontal: 12,
        marginVertical: 10,
    },
    textInput: {
        fontSize: scale(20),
    },
    footer: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    textRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: scale(15),
    },
    textBold: {
        fontSize: scale(15),
        fontWeight: 'bold',
        color: 'black'
    }
});

export {LogIn};

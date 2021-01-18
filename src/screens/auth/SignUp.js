import React from "react";
import {View, StyleSheet, Text, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity, TextInput} from "react-native";
import {GradientButton} from '../../components';
import {scaleVertical, scale} from '../../utils/scale';

const screenSize = Dimensions.get('window');

class SignUp extends React.Component{

    _onLogInButtonPressed = () => this.props.navigation.navigate('logIn');

    _onSignUpButtonPress = () => this.props.navigation.goBack();

    render(): React.ReactNode {
        return (
            <KeyboardAvoidingView
                behavior="position"
                enabled
                style={styles.screen}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/sign-up-image.png')}
                    />
                    <Text style={styles.textLarge}>
                        Registration
                    </Text>
                </View>
                <View style={styles.content}>
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
                            textContentType='emailAddress'
                            placeholder='Email'
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
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            textContentType='password'
                            placeholder='Confirm Password'
                            placeholderTextColor='#707070'/>
                    </View>
                    <GradientButton
                        height={scaleVertical(56)}
                        marginVertical={20}
                        text='SIGN UP'
                        fontSize={scale(20)}
                        beginColor='#14F1D9'
                        endColor='#3672F8'
                        onPress={this._onSignUpButtonPress}
                    />
                    <View style={styles.footer}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._onLogInButtonPressed}
                            style={styles.textRow}>
                            <Text style={styles.text}>Already have an account? </Text>
                            <Text style={styles.textBold}>
                                Log in now
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
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: '#ffffff',
    },
    image: {
        height: screenSize.width/3,
        width: screenSize.width/3,
        resizeMode: 'center',
    },
    content: {
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1,
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
    buttons: {
        flexDirection: 'row',
        marginBottom: 24,
        marginHorizontal: 24,
        justifyContent: 'space-around',
    },
    footer: {
        justifyContent: 'flex-end',
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
    },
    textLarge: {
        fontSize: scale(28),
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    }
});

export {SignUp};

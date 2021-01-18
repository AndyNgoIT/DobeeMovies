import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {scale, scaleVertical} from '../../utils/scale';
import {formatNumber} from '../../utils/formatNumber';
import {NavigationActions} from "react-navigation";
import {Gallery} from '../others/Gallery'
import {TouchableRipple} from "react-native-paper";
import {users} from "../../data";

const screenSize = Dimensions.get('window');

class ProfileV1 extends React.Component{
    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id', 0);
        this.state = {
            data: users.find(item => item.id == id),
        };
    }

    _onButtonPress = () => {};

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View>
                        <ImageBackground
                            source={require('../../assets/images/drawer-header-image.png')}
                            resideMode='center'
                            style={styles.imageBackground}>
                            <Header
                                type='overlay'
                                label='PROFILE'
                                onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                            />
                            <Image
                                source={this.state.data.photo}
                                resizeMode='cover'
                                style={styles.avatar}
                            />
                        </ImageBackground>
                        <Text style={styles.username}>
                            {this.state.data.firstName} {this.state.data.lastName}
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <View style={styles.section}>
                            <Text style={styles.sectionNumber}>{formatNumber(this.state.data.postCount)}</Text>
                            <Text style={styles.sectionText}>Post</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionNumber}>{formatNumber(this.state.data.followersCount)}</Text>
                            <Text style={styles.sectionText}>Followers</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionNumber}>{formatNumber(this.state.data.followingCount)}</Text>
                            <Text style={styles.sectionText}>Following</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableRipple
                            rippleColor="white"
                            onPress={this._onButtonPress}
                            style={styles.button}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>FOLLOW</Text>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple
                            rippleColor="white"
                            onPress={this._onButtonPress}
                            style={styles.button}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>MESSAGE</Text>
                            </View>
                        </TouchableRipple>
                    </View>
                    <Gallery headerType='none'/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        width: '100%',
    },
    imageBackground: {
        height: screenSize.width,
        width: '100%',
        // flexDirection: 'column-reverse',
    },
    avatar: {
        alignSelf: 'center',
        height: scale(180),
        width: scale(180),
        borderRadius: 90,
        borderWidth: 5,
        borderColor: 'white',
        top: screenSize.width-scaleVertical(58)-scale(180)/2,
    },
    username: {
        fontSize: scale(26),
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop: scale(190)/2+5,
        marginBottom: 10,
    },
    sectionContainer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#CED0CE'
    },
    section: {
        flex: 1,
        alignItems: 'center',
    },
    sectionNumber: {
        fontSize: scale(20),
        fontWeight: 'bold',
        color: 'black',
        marginTop: 15,
    },
    sectionText: {
        fontSize: scale(16),
        marginTop: 5,
        marginBottom: 15,
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
    },
    buttonView: {
        marginVertical: 7,
        alignItems: 'center',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: '#CED0CE'
    },
    buttonText: {
        fontSize: scale(20),
        fontWeight: '300',
        color: '#41abe1',
        marginVertical: 10,
    },
    hiddenContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(39,62,84,0.82)',
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    imageBackgroundHidden: {
        height: scaleVertical(58),
        width: '100%',
    },
    textHidden: {
        fontWeight: 'bold',
        fontSize: scale(16),
        color: 'white',
    },
    avatarHidden: {
        height: scale(40),
        width: scale(40),
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
});

export {ProfileV1};

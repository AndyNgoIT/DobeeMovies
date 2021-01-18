import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View, ImageBackground, Text, Image, AsyncStorage} from 'react-native';
import {Header} from '../../components';
import {users} from '../../data';
import {scale, scaleVertical} from '../../utils/scale';
import {formatNumber} from '../../utils/formatNumber';
import {NavigationActions} from "react-navigation";
import {GalleryV2} from '../others/GalleryV2'
import {TouchableRipple} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';

const screenSize = Dimensions.get('window');
const avatarHeight = scale(130);

class ProfileV2 extends React.Component{
    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id', 0);
        this.state = {
            isFollowed: false,
            data: users.find(item => item.id === id),
        };
    }

    _setFollowAsync = async (value) => {
        await AsyncStorage.setItem('followToken', value);
    };

    _getFollowAsync = async () => {
        const followToken = await AsyncStorage.getItem('followToken', false);
        this.setState({isFollowed: followToken});
    };

    componentWillMount(): void {
        this._getFollowAsync();
    }

    componentWillUnmount() {
        this._setFollowAsync(this.state.isFollowed);
    }

    _onFollowButtonPress = () => {
        this.setState({isFollowed: true});
        // this._setFollowAsync(true);
    };

    _onUnFollowButtonPress = () => {
        this.setState({isFollowed: false});
        // this._setFollowAsync(false);
    };

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
                                zIndex={2}
                                position='absolute'
                                type='overlay'
                                label='PROFILE'
                                onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                            />
                            <LinearGradient
                                style={{flex: 1, alignSelf: 'stretch', justifyContent: 'flex-end', zIndex: 1}}
                                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(39,62,84,0.82)']}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{width: avatarHeight, height: avatarHeight/2}}>
                                        <Image
                                            source={this.state.data.photo}
                                            resizeMode='cover'
                                            style={styles.avatar}
                                        />
                                    </View>
                                    <View style={{justifyContent: 'center', flex: 1, height: avatarHeight/2}}>
                                        <Text style={styles.username}>
                                            {this.state.data.firstName} {this.state.data.lastName}
                                        </Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: avatarHeight}}/>
                            <View style={{flex: 1}}>
                                {this.state.isFollowed===false
                                ?
                                    <TouchableRipple
                                        onPress={this._onFollowButtonPress}
                                        rippleColor="white"
                                        style={[styles.button, {backgroundColor: '#41abe1',}]}>
                                        <Text style={styles.buttonText}>FOLLOW</Text>
                                    </TouchableRipple>
                                :
                                    <TouchableRipple
                                        onPress={this._onUnFollowButtonPress}
                                        rippleColor="white"
                                        style={[styles.button, {backgroundColor: 'gray',}]}>
                                        <Text style={styles.buttonText}>UNFOLLOW</Text>
                                    </TouchableRipple>
                                }
                            </View>
                        </View>
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
                    <GalleryV2 headerType='none'/>
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
        height: screenSize.width*5/6,
        width: '100%',
    },
    avatar: {
        height: avatarHeight,
        width: avatarHeight,
        borderRadius: 90,
        borderWidth: 5,
        borderColor: 'white',
        // top: -avatarHeight/2,
        marginLeft: 10,
    },
    username: {
        fontSize: scale(20),
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginBottom: 10,
    },
    sectionContainer: {
        flexDirection: 'row',
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
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    buttonText: {
        fontSize: scale(20),
        fontWeight: '300',
        color: 'white',
        marginVertical: 10,
    },
});


export {ProfileV2};

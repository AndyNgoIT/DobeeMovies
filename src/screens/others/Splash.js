import React from 'react';
import {StyleSheet, ImageBackground, View, Dimensions, StatusBar,} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { ProgressBar } from '../../components';
import { scale } from '../../utils/scale';

const delay = 500;

class SplashScreen extends React.Component {

    state = {
        progress: 0,
    };

    componentDidMount() {
        StatusBar.setHidden(true, 'none');
        this.timer = setInterval(this.updateProgress, delay);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateProgress = () => {
        if (this.state.progress === 1) {
            clearInterval(this.timer);
            setTimeout(this.onLoaded, delay);
        } else {
            const randProgress = this.state.progress + (Math.random() * 0.5);
            this.setState({ progress: randProgress > 1 ? 1 : randProgress });
        }
    };

    onLoaded = () => {
        StatusBar.setHidden(false, 'slide');
        const { navigation } = this.props;
        const toNavigationMenu = navigation.getParam('toNavigationMenu', 'false');
        switch (toNavigationMenu) {
            case 'true': {
                this.props.navigation.goBack();
                break;
            }
            case 'false': {
                const toHome = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'main' })],
                });
                this.props.navigation.dispatch(toHome);
                break;
            }
        }
    };

    render = () => (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    style={[styles.image, { width: Dimensions.get('window').width }]}
                    source={require('../../assets/images/splash-image.jpg')}
                >
                </ImageBackground>
            </View>
            <ProgressBar
                color='#ffffff'
                style={styles.progress}
                progress={this.state.progress}
                width={scale(320)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flex: 1,
    },
    image: {
        resizeMode: 'cover',
        height: '100%',
    },
    progress: {
        alignSelf: 'center',
        bottom: 40,
        backgroundColor: 'transparent',
    },
});

export {SplashScreen as Splash};

import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeStack = createStackNavigator(
    {
     HomeScreen: HomeScreen,
     DetailScreen: DetailScreen
    }, 
   {
     defaultNavigationOptions: {
       headerShown: false,
     },
   }
);

const BottomNav = createBottomTabNavigator({
     HomeStack: {
         screen: HomeStack,
         navigationOptions: {
             tabBarLabel: 'Trang Chủ',
         }
     },
     Playlist: {
        screen: PlaylistScreen,
        navigationOptions: {
            tabBarLabel: 'Danh Sách Phát',
        }
     },
     Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Cá Nhân',
        }
     }
}, 
   {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeStack') {
          iconName = 'home';
        } else if (routeName === 'Playlist') {
          iconName = 'th-list';
        } else if (routeName === 'Profile') {
            iconName ='user-circle';
        }
        return <FontAwesome5 name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#001F45',
      inactiveTintColor: '#5A7B8D',
      style: {paddingVertical: 10},
      labelStyle: {
          fontFamily: 'Roboto-Relugar',
          fontSize: 11,
      },
    },
   }
);

const SwitchNav = createSwitchNavigator({
    DashBoard: BottomNav,
    LoginScreen: LoginScreen,
})

const MainContainer = createAppContainer(SwitchNav);
export default MainContainer;

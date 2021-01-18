import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Drawer} from './screens/navigations/DrawerNavigation';
import {Splash} from './screens/others/Splash';

const Main = createStackNavigator({
    splash: Splash,
    main: {
        screen: Drawer
    },
},{
    headerMode: 'none',
    // transitionConfig: () => fromLeft(1000),
});

const MainContainer = createAppContainer(Main);

export {MainContainer};

import React from "react";
import {createSwitchNavigator} from 'react-navigation';
import {ListNavigator} from './ListNavigation';
import {GridNavigator} from './GridNavigation';
import {AuthLoading} from '../others/AuthLoading';

const HomeNavigator = createSwitchNavigator({
    loading: AuthLoading,
    list: ListNavigator,
    grid: GridNavigator,
},{
    headerMode: 'none',
});

export {HomeNavigator};

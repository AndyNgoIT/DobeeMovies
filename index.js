import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {MainContainer} from './src/Main';

const App = () => (
    <MainContainer/>
);

AppRegistry.registerComponent(appName, () => App);

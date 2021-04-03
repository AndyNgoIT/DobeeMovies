import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, SafeAreaView } from 'react-native';
import MainContainer from './route';
import movieReducer from '../redux/reducer';

const store = createStore(movieReducer)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
        );
    }
}

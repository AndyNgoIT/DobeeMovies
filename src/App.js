import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, SafeAreaView } from 'react-native';
import MainContainer from './route';
import movieReducer from '../redux/reducer';

const store = createStore(movieReducer)

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
        );
    }
}

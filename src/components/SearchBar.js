import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {scale, scaleVertical} from '../utils/scale';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBar extends React.Component{
    render(): React.ReactNode {
        return (
            <View style={{backgroundColor: '#e5e5e5'}}>
                <View style={styles.searchContainer}>
                    <View style={styles.icon}>
                        <Icon
                            name="search"
                            color='#bcbcbc'
                            size={scale(20)}
                        />
                    </View>
                    <TextInput
                        onChangeText={this.props.onSearchTextChange}
                        style={styles.textInput}
                        placeholder='Search'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 10,
        borderRadius: 25,
    },
    icon: {
        width: scale(42)+24-12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        fontSize: scale(18),
        color: 'black',
    }
});

export {SearchBar};

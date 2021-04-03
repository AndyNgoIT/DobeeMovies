import React, { Component } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { HeaderComponent, MoviesComponent } from '../components';

class PlaylistItem extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', marginHorizontal: 21}}>
                <HeaderComponent title = {'Danh Sách 1'} 
                    fontWeight={'bold'} 
                    fontSize={24} 
                    color={'#001f45'}
                    textAlign={'center'} />
                <ScrollView>
                    <View>
                        <Text>Có {this.props.movies.current.length} phim</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    const { movies } = state
    return { movies }
}

export default connect(mapStateToProps)(PlaylistItem)

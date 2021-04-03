import React, { Component } from 'react';
import { 
    Text, 
    View,
    ScrollView, 
    SafeAreaView,
    TouchableOpacity,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { HeaderComponent, MoviesComponent } from '../components';
import { addMovie } from '../../redux/action';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                    <HeaderComponent title = {'Thêm Phim'} 
                        fontWeight={'bold'} 
                        fontSize={24} 
                        color={'#001f45'}
                        textAlign={'center'} />
                    
                    <View style={{
                                marginHorizontal: 21, 
                                marginVertical: 13, 
                                alignItems: 'flex-end', 
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                        <Text style={{color: '#888'}}>
                            {this.state.count} video đã chọn
                        </Text>
                        <TouchableOpacity style={{
                            backgroundColor: '#009',
                            borderRadius: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            width: 150,
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('PlaylistItem')
                            }}
                            >
                    
                            <Text style={{
                                fontSize: 16,
                                color: '#fff',
                                textAlign: 'center',
                            }}>Tiếp Theo</Text>
                        </TouchableOpacity>
                    </View>
    
                  {
                      this.props.movies.all_movies.map((movie, index) => (
                         <MoviesComponent 
                            flexDirection={'row'}
                            horizontal={false}
                            marginBottom={10}
                            marginRight={30}
                            maxWidth={180}
                            height={40}
                            pressItem={() => {
                                this.props.addMovie(index)
                                this.setState({ count: this.state.count + 1})
                            }}
                         />
                      ))
                  }
                
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    const { movies } = state
    return { movies }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addMovie,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
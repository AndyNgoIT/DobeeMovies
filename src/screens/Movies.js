import React, { PureComponent } from 'react';
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

class Movies extends PureComponent {
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
                            }}>
                        <Text style={{color: '#888'}}>
                            {this.state.count} video đã chọn
                        </Text>
                    </View>
    
                  {
                      this.props.movies.all_movies.map((movie, index) => (
                         <TouchableOpacity
                            style={{fontSize: 20,
                                fontWeight: '500',
                                marginVertical: 12,
                                marginHorizontal: 16
                            }}
                            onPress={() => {
                                this.props.addMovie({movie})
                                this.setState({ count: this.state.count + 1})
                            }}
                         >
                            <Text>{movie.title}</Text>
                            <Text>Lượt xem: {movie.popularity}</Text>
                         </TouchableOpacity>
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
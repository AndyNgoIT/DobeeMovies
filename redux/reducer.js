import { combineReducers } from 'redux';
import moviesData from '../src/assets/data.json';

const initPlaylist = {
    current: [],
    all_movies: [
       ...moviesData.results
    ]
}

const movieReducer = (state = initPlaylist, action) => {
    switch(action.type) {
        case 'add_movie': 
            const { current, all_movies } = state

            const addedMovie = all_movies.shift(action.payload)

            current.push(addedMovie)

            const newState = {
                current,
                all_movies
            }

            return newState

        default:
            return state
    }
}

export default combineReducers({
    movies: movieReducer
})
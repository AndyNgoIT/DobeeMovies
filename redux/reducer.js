import { combineReducers } from 'redux'

const initPlaylist = {
    current: [],
    all_movies: [
        'Harry Potter',
        'The Father',
    ]
}

const movieReducer = (state = initPlaylist, action) => {
    switch(action.type) {
        case 'add_movie': 
            const { current, all_movies } = state

            const addedMovie = all_movies.splice(action.payload, 1)

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
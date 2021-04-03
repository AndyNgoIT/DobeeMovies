import {combineReducers} from 'redux';
import moviesData from '../src/assets/data.json';

const initPlaylist = {
  current: [],
  all_movies: [...moviesData.results],
};

const movieReducer = (state = initPlaylist, action) => {
  switch (action.type) {
    case 'add_movie': {
      const {current} = state;
      const tempData = current;
      const findIndex = current.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (findIndex >= 0) {
        tempData.filter((item) => item.id === action.payload.id);
      }

      tempData.push(action.payload);
      return {
        ...state,
        current: tempData,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  movies: movieReducer,
});

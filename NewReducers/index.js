import {combineReducers} from 'redux';

import progressBarReducer from './progressBarReducer';
import snackBarReducer from './snackBarReducer';
 
const allReducers = combineReducers({
progressBarReducer,
snackBarReducer,

})

export default allReducers;

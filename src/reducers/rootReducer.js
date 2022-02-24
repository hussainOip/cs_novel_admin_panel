import { combineReducers } from 'redux';
import settings from './settings';
import userReducer from './userReducer';
export default combineReducers({
    settings,
    userReducer
});
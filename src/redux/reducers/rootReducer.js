import { combineReducers } from 'redux';
import settings from './settings';
import userReducer from './userReducer';
import categoriesReducer from './categoriesReducer';
import formBookReducer from './formBookReducer';
import seasonReducer from './seasonReducer';
import chapterReducer from './chapterReducer';
import orderReducer from './orderReducer';
import descriptionReducer from "./descrptipnReducer"

export default combineReducers({
    settings,
    userReducer,
    categoriesReducer,
    formBookReducer,
    seasonReducer,
    chapterReducer,
    orderReducer,
    descriptionReducer
});
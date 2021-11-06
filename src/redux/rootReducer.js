import { combineReducers } from "redux";
import {nav} from './reducers/nav';
import {main} from './reducers/main';
import {images} from './reducers/images';


export default combineReducers({
    nav, main, images
})
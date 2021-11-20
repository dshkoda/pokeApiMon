import { combineReducers } from "redux";
import {nav} from './reducers/nav';
import {main} from './reducers/main';
import {images} from './reducers/images';
import {item} from './reducers/item';


export default combineReducers({
    nav, main, images, item
})
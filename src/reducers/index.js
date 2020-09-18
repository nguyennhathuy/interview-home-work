import {combineReducers} from 'redux';
import products from './products';
import searchKeyword from './searchKeyword';

const myReducer = combineReducers({
    products,
    searchKeyword
});

export default myReducer;
import * as Types from '../constant/actionTypes';

let initialState = '';

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.SEARCH_PRODUCT:
            state = action.keyword;
            return state;
        default:
            return state;
    }
}

export default myReducer;
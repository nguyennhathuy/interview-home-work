import * as Types from '../constant/actionTypes';
let initialState = [];

let index = -1;
const findIndex = (id, array) => {
    for (let i = 0; i < array.length; i++) {
        if (id === array[i].id) {
            return i;
        }
    }
    return -1;
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(action.id, state);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCT:
            let product = {
                id: action.product.id,
                title: action.product.title,
                author: action.product.author,
                time: action.product.time,
                content: action.product.content,
                display: action.product.display
            };
            return [...state, product];      
        default:
            return [...state];
    }
}

export default myReducer;
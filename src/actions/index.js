import * as Types from '../constant/actionTypes';
import callApi from '../utils/apiCaller';

export const toggleComment = (id) => {
    return {
        type: Types.TOGGLE_COMMENT,
        id
    }
}


export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteProduct(id));
        })
    }
}
export const deleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}


export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(addProduct(res.data));
        })
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}


export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(fetchProducts(res.data));
        })
    }
}


export const fetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const searchProduct = (keyword) => {
    return {
        type: Types.SEARCH_PRODUCT,
        keyword
    }
}
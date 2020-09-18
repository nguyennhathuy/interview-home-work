import React, {useEffect} from 'react';
import Product from './Product';
import '../style/Home.css';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';



function Home({products, searchKeyword, actFetchProductsRequest}) {
    useEffect(() => {
            document.title = actFetchProductsRequest();
        }, []);
    let Products = [];
    if(searchKeyword) {
        Products = products.filter((product) => {
            return product.title.toLowerCase().indexOf(searchKeyword) !== -1;
        });
        Products = Products.map((product, index) => {
            return <Product key={index} product={product} display={product.display}/>
        })
    } else {
        Products = products;
        Products = Products.map((product, index) => {
            return <Product key={index} product={product} display={product.display}/>
        })
    }
    return (
        <div className='container home'>
            <div className='row'>
                {Products}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products: state.products,
        searchKeyword: state.searchKeyword
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actFetchProductsRequest: () => {
            dispatch(Actions.actFetchProductsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

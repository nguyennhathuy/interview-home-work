import React from 'react';
import '../style/Product.css';
import * as Actions from '../actions/index';
import { connect } from 'react-redux';

function Product({ product, actDeleteProductRequest }) {
    
    const onDeleteProduct = (id) => {
        if(confirm('Do you want to delete ???')) { //eslint-disable-line
            actDeleteProductRequest(id);
        }
    }


    return (
        <div className="post-preview">
            <div className='title__flex'>
                <a href="post.html">
                    <h2 className="post-title">
                        {product.title}
                    </h2>
                </a>
                <i className='fa fa-window-close' onClick={() => {onDeleteProduct(product.id)}}></i>
            </div>

            {/*Product content*/}
            <p className='post-content'>
                {product.content}
            </p>
            <p className="post-meta">
                Posted by <strong> {product.author} </strong> on {product.time}
            </p>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        actDeleteProductRequest: (id) => {
            dispatch(Actions.actDeleteProductRequest(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Product);

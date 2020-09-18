import React, { useState } from 'react';
import '../style/Header.css';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import routes from '../routes';

function Header({searchProduct}) {
    const [search, setSearch] = useState('');
    const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className='nav-link'>
                            {label}
                        </Link>
                    </li>
                );
            }} />
        );
    }
    const showMyLink = (listLinks) => {
        let result = null;
        if(listLinks.length > 0) {
            result = listLinks.map((link, index) => {
                return (
                    <MenuLink key={index} label={link.label} to={link.path} activeOnlyWhenExact={link.exact} />
                );
            });
        }
        return result;
    }
    return (
        /*Nav start*/
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <a className="navbar-brand" href="/">Zigvy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*col-auto start*/}
                <div className='col-auto'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {showMyLink(routes)}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                name='search'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => {searchProduct(search)}}>Search</button>
                        </form>
                    </div>
                </div>
                {/*col-auto end*/}

            </div>
        </nav>
        /*Nav end*/
    )
}


const mapDispatchToProps = dispatch => {
    return {
        searchProduct: (keyword) => {
            dispatch(Actions.searchProduct(keyword))
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);

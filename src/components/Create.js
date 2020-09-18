import React, {useState} from 'react';
import '../style/Create.css';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import {Link} from 'react-router-dom'

function Create({actAddProductRequest, history}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let product = {
            title,
            author,
            time,
            content
        }
        actAddProductRequest(product);
        history.goBack();
    }
    return (
        <div className="container create">
            <h1>Create Blogs</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Title'
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Name of author'
                    name='author'
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='MM/DD/YYYY'
                        name='time'
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea 
                        className="form-control" 
                        rows="5" 
                        placeholder='Content'
                        name='content'
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    >
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                <Link to='/' className="btn btn-danger">Back</Link>
            </form>
        </div>

    )
}


const mapDispatchToProps = dispatch => {
    return {
        actAddProductRequest: (product) => {
            dispatch(Actions.actAddProductRequest(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(Create);

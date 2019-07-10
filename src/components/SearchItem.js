import React from 'react';
import './SearchItem.css';
// import Moment from 'react-moment';


const SearchItem = ({ created_at, title, author, url, points, num_comments }) => {
    // debugger
    return (
        <div className='search-item p-2'>
                <h1 className='h5'>{title}</h1>
                <p className='text-muted mb-0'> {points} points | {author} | {new Date(created_at).toDateString()} | {num_comments} comments | <a href={url} rel="noopener noreferrer" target='_blank'>{url.substring(0,100) + '.....'}</a></p>
        
            </div>
    );
};

export default SearchItem;

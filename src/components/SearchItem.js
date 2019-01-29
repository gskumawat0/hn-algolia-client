import React from 'react';
// import './SearchItem.css';
import Moment from 'react-moment';


const  SearchItem = ({date, title, user, url, points, comments})=>{
        return (
            <div className='search-item p-2'>
                <h1>{title}</h1>
                <p className='text-muted mb-0'> {points} points | {user} | <Moment format='DD MMM YYYY'> {date} </Moment> | {comments} comments | <a href={url} rel="noopener noreferrer" target='_blank'>{url}</a></p>
        
            </div>
        );    
    };

export default SearchItem;
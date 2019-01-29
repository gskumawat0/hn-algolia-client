import React, { Component} from 'react';
import './SectionFilters.css';

class SectionFilters extends Component {
    // constructor (props){
    //     super(props);
    // }
    
    render(){
        return ( 
            <header className='section-header'>
                <div className='query'>
                     Search
                    <select name='query' value='' className='mx-2 my-1'>
                        <option value='1'>All</option>
                        <option value='2'>Stories</option>
                        <option value='3'>Comments</option>
                    </select>
                </div>
                <div className='sort px-3'>
                    by 
                    <select name='sort' value='' className='mx-2 my-1'>
                        <option value='1'>Popularity</option>
                        <option value='2'>Date</option>
                    </select>
                </div>
                <div className='date-range mx-3'>
                     for 
                    <select name='dateRange' value='' className='mx-2 my-1'>
                        <option value='1'>All time</option>
                        <option value='2'>Last 24h</option>
                        <option value='3'>Past Week</option>
                        <option value='3'>Past Month</option>
                        <option value='3'>Past Year </option>
                    </select>
                </div>
            </header>
            )
    }
}

export default SectionFilters;
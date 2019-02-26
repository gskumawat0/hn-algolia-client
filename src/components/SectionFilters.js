import React, { Component } from 'react';
import './SectionFilters.css';

class SectionFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: 'byDate',
            dateRange: 'all',
            type: 'all'
        };


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value });
    }

    render() {
        const { sort, dateRange, type } = this.state;
        return (
            <header className='section-header'>
                <div className='query'>
                     Search
                    <select name='query' onChange={this.handleChange} value={type}  className='mx-2 my-1'>
                        <option value='all'>All</option>
                        <option value='story'>Stories</option>
                        <option value='comment'>Comments</option>
                    </select>
                </div>
                <div className='sort px-3'>
                    by 
                    <select name='sort' onChange={this.handleChange} value={sort} className='mx-2 my-1'>
                        <option value='byPopularity'>Popularity</option>
                        <option value='byDate'>Date</option>
                    </select>
                </div>
                <div className='date-range mx-3'>
                     for 
                    <select name='dateRange' onChange={this.handleChange} value={dateRange} className='mx-2 my-1'>
                        <option value='all'>All time</option>
                        <option value='last24h'>Last 24h</option>
                        <option value='pastWeek'>Past Week</option>
                        <option value='pastMonth'>Past Month</option>
                        <option value='pastYear'>Past Year </option>
                    </select>
                </div>
            </header>
        );
    }
}

export default SectionFilters;

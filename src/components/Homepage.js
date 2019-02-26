import React from 'react';
import './Homepage.css';
import SectionFilters from './SectionFilters';
import SectionBody from '../components/SectionBody';

const Homepage = ({ currentUser }) => {
    if (currentUser && currentUser.isAuthenticated) {
        return (
            <div className='mb-0'>
                < SectionFilters />
                < SectionBody /> 
            </div>
        );
    }
    else {
        return (<div>
            <SectionFilters />
            <SectionBody /> 
        </div>);
    }
};
export default Homepage;

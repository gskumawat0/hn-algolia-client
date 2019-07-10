import React, { Component } from 'react';
import './Nav.css';
import logo from '../hn-algolia-logo.PNG';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import { fetchItems } from '../store/actions/items';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.fetchItems(e.target.value);
    }


    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const showItem = this.props.currentUser.isAuthenticated ? <h1>{this.props.currentUser.username} </h1> : <h1>Search <br /> Hacker News </h1>;
        const { query } = this.state;
        return (
            <nav>
                <div className='nav-brand'>
                    <h1> <Link to='/'> <img src={logo} alt='hn-algolia' /></Link></h1>
                </div>
                <div className='brand-name px-3'>
                    {showItem}  
                </div>
                <div className='nav-input  mx-3'>
                    {this.props.currentUser.isAuthenticated && <input name='query' onChange={this.handleChange}  value={query}  placeholder='Stories, polls, jobs, comment'/> }
                </div>
                <div className=' nav-algolia ml-auto '>
                    <a className='text-white text-center' rel='noopener noreferrer' href='https://www.algolia.com/?utm_source=hn_search&utm_medium=link&utm_term=logo&utm_campaign=hn_algolia'><span className='text-dark'> by </span>Algolia</a>
                </div>
                <div className='nav-logout  mx-2 float-right'>
                    {this.props.currentUser.isAuthenticated && <a href='/logout' onClick={this.logout} className='text-white'>logout </a>}
                </div>
                <div className='nav-setting  mr-2'>
                    <a href='/setting' className='text-white'><i className="fa fa-sliders fa-2x" aria-hidden="true"></i> </a>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}


export default connect(mapStateToProps, { logout, fetchItems })(Navbar);

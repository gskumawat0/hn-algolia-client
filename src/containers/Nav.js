import React, { Component } from 'react';
import './Nav.css';
import logo from '../hn-algolia-logo.PNG';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const showItem = this.props.currentUser.isAuthenticated ? <h1>this.props.currentUser.email </h1> : <h1>Search <br /> Hacker News </h1>;
        const { query } = this.state;
        return (
            <nav>
                <div className='nav-brand'>
                    <h1> <Link to='/'> <img src={logo} alt='hn-algolia' /></Link></h1>
                </div>
                <div className='brand-name px-3'>
                    {showItem}  
                </div>
                <div className='nav-input mx-3'>
                     {/* <i className="fa fa-search" aria-hidden="true"></i> */}
                     <input name='query' onChange={this.handleChange} onBlur={this.handleBlur} value={query}  placeholder='Stories, polls, jobs, comment'/> 
                </div>
                <div className='mx-3 nav-algolia '>
                    <p className='mb-0'><a className='text-white' rel='noopener noreferrer' href='https://www.algolia.com/?utm_source=hn_search&utm_medium=link&utm_term=logo&utm_campaign=hn_algolia'><span className='text-dark'> by </span>Algolia</a></p>
                </div>
                <div className='nav-logout ml-2 mr-0 pr-0 float-right'>
                    {this.props.currentUser.isAuthenticated && <a href='www.link.com' onClick={this.logout} className='text-white'>logout </a>}
                </div>
                <div className='nav-setting ml-5 mr-0 pr-0 float-right'>
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


export default connect(mapStateToProps, { logout })(Navbar);

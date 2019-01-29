import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';
import withAuth from '../hocs/withAuth'

const Main = (props)=>{
    const {authUser, errors, removeError, currentUser} = props;
    return(
        <Switch>
            <Route exact path='/' render={props => <Homepage currentUser={currentUser} {...props} />} /> 
            <Route exact path='/signin' render={props => {
                return (
                <AuthForm {...props} errors={errors} onAuth={authUser} removeError={removeError} buttonText='log In' heading='Welcome back.' />)}} 
            />
            <Route exact path='/signup' render={props => {
                return (
                <AuthForm {...props} errors={errors} onAuth={authUser} removeError={removeError} buttonText='Sign In' heading='Sign Up and Start Searching.' />)}} 
            />
            <Route path='/new' component={withAuth(Homepage)} />
        </Switch>

    );
};

function mapStateToProps( state){
    return {
        currentUser : state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));
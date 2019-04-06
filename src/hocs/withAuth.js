import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addError, removeError } from '../store/actions/errors'


export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.addError('you must be signed in to proceed');
                this.props.history.push('/signin');
            }
        }
        componentWillUpdate(nextProps) {
            if (!this.props.isAuthenticated) {
                this.props.addError('you must be signed in to proceed');
                this.props.history.push('/signin');
            }
        }

        render() {
            return <ComponentToBeRendered { ...this.props }/>
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated,
            currentUser: state.currentUser.username
        };
    }

    return connect(mapStateToProps, { removeError, addError })(Authenticate);

}

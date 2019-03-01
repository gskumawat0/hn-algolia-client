import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push('/signin');
            }
        }
        componentWillUpdate(nextProps) {
            if (!this.props.isAuthenticated) {
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
            currentUser: state.currentUser.user.username
        };
    }

    return connect(mapStateToProps, null)(Authenticate);

}

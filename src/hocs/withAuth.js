import React, { Component } from "react";
import { connect } from "react-redux";
import { addError, removeError } from "../store/actions/errors";

export default function withAuth(ComponentToBeRendered) {
	class Authenticate extends Component {
		UNSAFE_componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.props.addError("you must be signed in to proceed");
				this.props.history.push("/signin");
				return false;
			}
		}
		UNSAFE_componentWillUpdate(nextProps) {
			if (!this.props.isAuthenticated) {
				this.props.addError("you must be signed in to proceed");
				this.props.history.push("/signin");
				return false;
			}
		}

		render() {
			return <ComponentToBeRendered {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return {
			isAuthenticated: state.currentUser.isAuthenticated,
			currentUser: state.currentUser.username,
		};
	}

	return connect(mapStateToProps, { removeError, addError })(Authenticate);
}

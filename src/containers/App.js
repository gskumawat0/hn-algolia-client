import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Nav";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	// prevent manullay tempering
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (e) {
		store.dispatch(setCurrentUser({}));
	}
} else {
	store.dispatch(setCurrentUser({}));
	setAuthorizationToken("");
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="container">
					<Navbar />
					<section className="main">
						<Main />
					</section>
				</div>
			</Router>
		</Provider>
	);
};

export default App;

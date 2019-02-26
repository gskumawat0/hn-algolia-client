import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './Nav';
import Main from './Main';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';


const store = configureStore();

if (!localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  // prevent manullay tempering
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }
  catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => {

  return (
    <Provider store={store} >
      <Router>
        <div className ='container'>
          <Navbar />
          <section className='main'>
            <Main />
          </section>  
        </div>
      </Router>
    </Provider>
  )
};
// class App extends Component {
//   render() {
//     return (
//       <div className ='container'>
//         <Nav />
//         <section className='main'>
//           <MainContent />
//         </section>  
//       </div>
//     );
//   }
// }

export default App;

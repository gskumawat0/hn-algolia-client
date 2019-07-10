import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' : 'signin';
        this.props.onAuth(authType, this.state)
            .then(() => { this.props.history.push('/') })
            .catch(() => {
                return;
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { email,password } = this.state;
        const { heading, buttonText, errors, history, removeError } = this.props;

        history.listen(() => {
            removeError();
        });
        return (
            <div className='mt-5'>
                <div className='row justify-content-md-center'>
                    <div className="col-md-6 mt-3">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className='text-center mt-4'>{heading}</h2>
                            {errors.message &&
                                <div  className='alert alert-danger'> {errors.message}</div>
                            }
                            <label htmlFor="email" className='text-left mt-2'>Email:</label>
                            <input type="text" className='form-control' id='email' placeholder='email' value={email} onChange={this.handleChange} name="email"/>
                            <label htmlFor="password" className='text-left mt-2'>Password:</label>
                            <input type="password" className='form-control' id='password' name="password" value={password} onChange={this.handleChange} placeholder='password'/>
                            <input type="submit" className='form-control bg-warning mt-2' value={buttonText}/>
                        </form>
                        {this.props.signUp ? <Link to='/signin'>Have an account? login here </Link>: <Link to='/signup'>Don't have an account? signup here</Link>}
                    </div>
                </div>       
            </div>
        );
    }
}

export default AuthForm;

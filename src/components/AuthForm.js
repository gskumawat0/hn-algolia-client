import React, { Component} from 'react';

class AuthForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password: '',
            email:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);    
    }
    
    handleSubmit = e =>{
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' :'signin';
        this.props.onAuth(authType,this.state)
            .then(()=>{this.props.history.push('/')})
            .catch(()=>{
                return ;            
            });
    };
        
    handleChange = (e)=>{
        this.setState({[e.target.name] : e.target.value}); 
    }
    
    render(){
        const {email,username} = this.state;
        const {heading, buttonText, errors, history, removeError}= this.props;
        
        history.listen(()=>{
            removeError();            
        });
        
        return (
            <div className='mt-5'>
                <div className='row justify-content-md-center'>
                    <div className="col-md-6 mt-3">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className='text-center mt-4'>{heading}</h2>
                            {errors.message && <div className='alert alert-danger'>{errors.message}</div>}
                            <label htmlFor="email" className='text-left mt-2'>Email:</label>
                            <input type="text" className='form-control' id='email' placeholder='email' value={email} onChange={this.handleChange} name="email"/>
                            <label htmlFor="username" className='text-left mt-2'>Username:</label>
                            <input type="text" className='form-control' id='username' name="username"  value={username} placeholder='username' onChange={this.handleChange} />
                            <label htmlFor="password" className='text-left mt-2'>Password:</label>
                            <input type="password" className='form-control' id='password' name="password" onChange={this.handleChange} placeholder='password'/>
                            <input type="submit" className='form-control bg-warning mt-2' value={buttonText}/>
                        </form>
                    </div>
                </div>       
            </div>
        );
    }
}

export default AuthForm; 
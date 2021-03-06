import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom"
import { auth } from './firebase'
import { useHistory} from "react-router-dom"
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
            })
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/small/amazon_PNG2.png" alt=" " />
            
            </Link>
            
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button type="submit" onClick={signIn} className="login__signinBtn"> Sign IN</button>
                </form>
                    <p>By signing in you agree to the AMAZON CLONE TERMS & CONDITIONS.</p>

                    <button onClick={register} className="login__registrationBtn">Create Your Amazon Account</button>   
            </div>
        </div>
    )
}

export default Login

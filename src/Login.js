import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to="/">
                
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/small/amazon_PNG2.png" alt=" " />
            
            </Link>
            
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__signinBtn"> Sign IN</button>
                </form>
                    <p>By signing in you agree to the AMAZON CLONE TERMS & CONDITIONS.</p>
                    <button className="login__registrationBtn">Create Your Amazon Account</button>   
            </div>
        </div>
    )
}

export default Login

import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
        //firebase login will happen here underneath
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))


    }     

    const register = e =>{
        e.preventDefault();
        //firebase register will happen here underneath
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            // succes in creating a new user 
            // console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }

  return (
    
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                        src='https://cdn.cp.adobe.io/content/2/dcx/186081ae-25ef-49a9-bf05-aaf801a6f482/rendition/preview.jpg/version/1/format/jpg/dimension/width/size/1200' 
                />
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} 
                    />

                    <button type='submit' onClick={signIn}className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Zeltron Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register}className='login_registerButton'>Create your Zeltron Account</button>
            </div>
        </div>
    )
}

export default Login
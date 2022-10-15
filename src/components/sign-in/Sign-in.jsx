import { useState, useRef } from "react";

import "./sign-in.css";
import formContent from "../static/index";
import { Link, useNavigate } from "react-router-dom";


const SignIn = ({ email, password }) => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPassWordError] = useState(false);


    let input = formContent.input;


    const navigate = useNavigate();

    const handleSignIn = (e) => {
        if (emailInput !== email) {
            e.preventDefault();
            setEmailError(true)
        }

        if (passwordInput !== password) {
            e.preventDefault();
            setPassWordError(true)
        }

        if (emailInput === email && passwordInput === password) {
            
            setEmailError(false)
            setPassWordError(false)
            navigate('/scrumboard')
        }
    }  

    const handleChange = (event) => {
        setEmailInput(event.target.value);
        setEmailError(false)
    }

    const handlePasswordChange = (a) => {
        setPasswordInput(a.target.value);
        setPassWordError(false)
    }

    console.log(email)
    console.log(passwordInput)
    console.log(password)

    return (
        <div className='sign-in'>
            <h1>Have an account already?</h1>
            <h2>Sign In here!</h2>

            <form>
                <label htmlFor={input[1].type}>{input[1].label}</label>
                <input type={input[1].type} name={input[1].name} value={emailInput} onChange={handleChange} />

                {emailError &&
                    <p className="input_error">This email does not match the record</p>
                }

                <label htmlFor={input[2].type}>{input[2].label}</label>
                <input type={input[2].type} name={input[2].name} value={passwordInput} onChange={handlePasswordChange} />

                {passwordError &&
                    <p className="input_error">This password does not match the record</p>
                }

                <button onClick={handleSignIn}>SIGN IN</button>

            </form>

            <p>Don't Have an Account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

export default SignIn;
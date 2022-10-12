import { useState, useRef } from "react";

import "./sign-in.css";
import formContent from "../static/index";
import { Link } from "react-router-dom";


const SignIn = ({ email, password }) => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPassWordError] = useState(false);


    let input = formContent.input;

    // const emailInput = useRef('');
    // const passwordInput = useRef('')


    const handleChange = (event) => {
        setEmailInput(event.target.value);
    }

    const handlePasswordChange = (a) => {
        setPasswordInput(a.target.value);
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

                <label htmlFor={input[2].type}>{input[2].label}</label>
                <input type={input[2].type} name={input[2].name} value={passwordInput} onChange={handlePasswordChange} />

                {(emailInput === email) && (passwordInput === password) ? (
                    <Link to="/scrumboard"> <button>SIGN IN</button></Link>
                ) : null}

            </form>

            <p>Don't Have an Account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

export default SignIn;
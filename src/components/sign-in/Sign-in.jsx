import { useState } from "react";

import "./sign-in.css";
import formContent from "../static/index";
import { Link, useNavigate } from "react-router-dom";


const SignIn = ({ email, password }) => {


    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [signUpError, setSignUpError] = useState(null);


    const [emailError, setEmailError] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(true);

    const [passwordError, setPassWordError] = useState(false);
    const [passwordEmpty, setPassWordEmpty] = useState(true);



    let input = formContent.input;


    const navigate = useNavigate();

    const handleSignIn = (e) => {
        if (emailInput.length < 1) {
            e.preventDefault();
            setEmailEmpty(true)
        }

        if (emailInput !== email) {
            e.preventDefault();
            setEmailError(true)
        }

        if (passwordInput.length < 1) {
            e.preventDefault();
            setPassWordEmpty(true)
        }

        if (passwordInput !== password) {
            e.preventDefault();
            setPassWordError(true)
        }

        if ((email.length < 1 && emailInput.length < 1) && (password.length < 1 && passwordInput.length < 1)) {
            e.preventDefault();
            setSignUpError(true)
        }

        if ((signUpError === false) && (emailInput === email && passwordInput === password)) {

            setEmailError(false)
            setPassWordError(false)
            navigate('/scrumboard')
        }
    }


    const handleEmailChange = (event) => {
        setEmailInput(event.target.value);
        setEmailEmpty(false);
        setEmailError(false);
    }

    const handlePasswordChange = (a) => {
        setPasswordInput(a.target.value);
        setPassWordEmpty(false);
        setPassWordError(false);
    }

    console.log(email)
    console.log(passwordInput)
    console.log(password)

    return (
        <div className="signin_body">
            <div className='sign-in'>
                <h1>Have an account already?</h1>
                <h2>Sign In here!</h2>

                <form>
                    <label htmlFor={input[1].type}>{input[1].label}</label>
                    <input type={input[1].type} name={input[1].name} value={emailInput} onChange={handleEmailChange} />

                    {emailEmpty &&
                        <p className="input_error emailempty"> Email is empty! Input email</p>
                    }

                    {(!emailEmpty && emailError) &&
                        <p className="input_error emailerror">This email does not match any record. Note that email is case sensitive</p>
                    }

                    <label htmlFor={input[2].type}>{input[2].label}</label>
                    <input type={input[2].type} name={input[2].name} value={passwordInput} onChange={handlePasswordChange} />

                    {passwordEmpty &&
                        <p className="input_error passwordempty"> Password is empty! Input password</p>
                    }

                    {(!passwordEmpty && passwordError) &&
                        <p className="input_error passworderror">This password does not match any record</p>
                    }

                    { (signUpError === true) &&
                        <p className="input_error signup_error">You need to Sign up first</p>
                    }

                    <button onClick={handleSignIn}> SIGN IN</button>

                </form>

                <p>Don't Have an Account? <Link to="/signup"> <span className="signup_redirect"> Sign up </span> </Link></p>
            </div>
        </div>
    )
}

export default SignIn;
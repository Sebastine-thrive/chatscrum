import "./sign-in.css";
import formContent from "../static/index";
import { Link } from "react-router-dom";


const SignIn = () => {
    let input = formContent.input;

    return (
        <div className='sign-in'>
            <h1>Have an account already?</h1>
            <h2>Sign In here!</h2>

            <form>
                <label htmlFor={input[1].type}>{input[1].label}</label>
                <input type={input[1].type} name={input[1].name} />

                <label htmlFor={input[2].type}>{input[2].label}</label>
                <input type={input[2].type} name={input[2].name} />


                <label htmlFor="options">Project Name</label>
                <input type="text" name="text" />

                <Link to="/scrumboard"> <button>SIGN IN</button></Link>
            </form>

            <p>Don't Have an Account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

export default SignIn;
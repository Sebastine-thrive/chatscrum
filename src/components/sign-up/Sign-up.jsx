import "./sign-up.css";
import formContent from "../static/index";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from "react-router-dom";

const schema = yup.object().shape(
  {
    fullname: yup.string().required().min(5),
    email: yup.string().required("Please enter a valid email"),
    projectname: yup.string().required().min(3),
    password: yup.string().required("Please enter password").matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?$]{8,}$/,
      "Your password Must contain 8 or more Characterters, One Uppercase, One lowercase, One Number and one Special case Character")
  }
)

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = (data) =>
    console.log(data, "sign up successful");
  // console.log("Sign up successful")



  return (
    <div className='sign-up'>
      <h1>Don't have an account?</h1>
      <h2>Sign up here!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {formContent.input.map((input, key) => {
          return (
            <div key={key}>
              <label htmlFor={input.type}>{input.label}</label> <br />
              <input type={input.type} name={input.name} {...register(input.name)} />

              <p className="error-message">{errors[input.name]?.message}</p>
            </div>
          )
        })}

        <label htmlFor="options">User Type</label>
        <select id="options">
          <option value="Developer"  {...register('usertype')} >Developer</option>
          <option value="Owner"  {...register('usertype')}>Owner</option>
        </select>

        <Link to="/signin"> <button onClick={onSubmit}> SIGN UP</button> </Link>
      </form>

      <p>Have an Account? <Link to="/signin">Sign In</Link> </p>
      <p><Link to="/">Back to Home </Link></p>
    </div>
  )
}

export default SignUp;
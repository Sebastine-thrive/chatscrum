import React, { useRef, useEffect } from "react";

import "./sign-up.css";
import formContent from "../static/index";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import SignIn from "../sign-in/Sign-in";

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

export default function SignUp({ email, password, setEmail, setPassword, setProjectName, setUserType, setFullName, fullName, userType, projectName }) {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const handleUserType = (e) => {
    if (e.target.value === 'Owner') {
      setUserType('owner')
    } else if (e.target.value === 'Developer'){
      setUserType('developer')
    } else return;
  }

  const onSubmit = (data) => {
    setPassword(data.password)
    setEmail(data.email)
    setFullName(data.fullname)
    setUserType(data.usertype)
    setProjectName(data.projectname)
  }
  console.log(fullName)
  console.log(password)
  console.log(email)
  console.log(projectName)
  console.log(userType)




  return (
    <div className='sign-up'>
      <h1>Don't have an account?</h1>
      <h2>Sign up here!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="full name"> Full Name</label>
        <input type="text" name="fullname" {...register('fullname')} />
        <p className="error-message">{errors['fullname']?.message}</p>

        <label htmlFor="full name"> Email</label>
        <input type="email" name="email"  {...register('email')} />
        <p className="error-message">{errors['email']?.message}</p>

        <label htmlFor="full name"> Password</label>
        <input type="password" name="password" {...register('password')} />
        <p className="error-message">{errors['password']?.message}</p>

        <label htmlFor="full name"> Project Name</label>
        <input type="text" name="projectname" {...register('projectname')} />
        <p className="error-message">{errors['projectname']?.message}</p>


        <label htmlFor="options">User Type</label>
        <select id="options" name='usertype' >
          <option value="Owner"  {...register('usertype')} onClick={(e) => handleUserType(e)} >Owner</option>
          <option value="Developer"  {...register('usertype')} onClick={(e) => handleUserType(e)}>Developer</option>
        </select>

          <button className="signup_button" type='submit' > SIGN UP</button>
      
      </form>

      <p>Have an Account? <Link to="/signin">Sign In</Link> </p>
      <p><Link to="/">Back to Home </Link></p>
    </div>
  )
}

// export default SignUp;  
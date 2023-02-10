import React, { useRef } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from '../ContextProvider';
import "./sign-up.css";


const schema = yup.object().shape(
  {
    fullname: yup.string().required().min(5),
    email: yup.string().required("Please enter a valid email"),
    projectname: yup.string().required().min(3),
    password: yup.string().required("Please enter password").matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?$]{8,}$/,
      "Your password Must contain 8 or more Characterters, at least one UPPERCASE, one lowercase, One Number and one Special case Character")
  }
)

export default function SignUp() {

  const { email, password, setEmail, setPassword, setProjectName, setProjectType, setFullName, fullName, projectType, projectName, user, setUser } = useStateContext();

  const nameInput = useRef(null)


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
    if (e.target.value === 'office') {
      setProjectType('office')
    } else {
      setProjectType('home')
    }
  }

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setPassword(data.password);
    setEmail(data.email);
    setFullName(data.fullname);
    setProjectType(data.projecttype);
    setProjectName(data.projectname);
    setUser(true);
    console.log(user)

    navigate('/signin');
  }

  console.log(password)
  console.log(email)
  console.log(projectName)
  console.log(projectType)


  return (
    <div className="signup_body" >
      <div className='sign-up'>
        <h1>Don't have an account?</h1>
        <h2>Sign up here!</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input type="text" name="fullname" {...register('fullname')} placeholder="full name" />
          <p className="error-message">{errors['fullname']?.message}</p>

          <input type="email" name="email"  {...register('email')} placeholder="input email" />
          <p className="error-message">{errors['email']?.message}</p>

          <input type="password" name="password" {...register('password')} placeholder="input password" />
          <p className="error-message">{errors['password']?.message}</p>

          <input type="text" name="projectname" {...register('projectname')} placeholder="project name" />
          <p className="error-message">{errors['projectname']?.message}</p>


          <label htmlFor="options"> Project Type</label>
          <select id="options" {...register('projecttype')} name='projecttype' onChange={(e) => handleUserType(e)} >
            <option id="option" value="office"> office  </option>
            <option id="option" value="home"> home </option>

          </select>

          <button className="signup_button" type='submit' > SIGN UP</button>

        </form>

        <p>Have an Account? <Link to="/signin">
          <span className="signin_redirect">Sign In</span> </Link>
        </p>

        <p> <Link to="/"> <span className="back"> Back to Home </span>  </Link></p>
      </div>
    </div>
  )
}


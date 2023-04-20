import React, { useContext, useState } from 'react';
import  './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

const [error , setError] = useState('')

const { createUser } = useContext(AuthContext)

const handleSignUp = event =>{
    event.preventDefault()

     const form = event.target 
     const email = form.email.value 
     const password = form.password.value 
     const confirm = form.confirm.value 
     console.log(email,password,confirm)


     setError('')
     if(password !== confirm) {
        setError('password did not match ')
        return
     }
     else if(password.length < 6) 
     {
        setError('password should be 6 character long ')
        return
     } 
     else if (!/(?=.*?[!@#\$&*~])/.test(password))
     {
        setError(' password should contain at least one Special character')
        return 
     }

     createUser(email,password)
     .then((result) => {
       
        const loggedUser = result.user;
        form.reset()
        console.log(loggedUser)
        
        
      })
      .catch((error) => {
        console.log(error)
         setError(error.message) 
        
      });

}




    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col ">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold text-center">Sign-Up now!</h1>
  
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleSignUp}  className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <span className="label-text">Confirm-Password</span>
      </label>
      <input type="password" name='confirm' placeholder="password" className="input input-bordered"  required />
     
    </div>
    <div className="form-control mt-6">
      
      <input type="submit"className="btn btn-primary " value = 'Sign-up' />
    </div>

    <p>Already have an account  <Link to='/login' className="link link-color  ">Please login</Link></p>

    <p className='mt-3 text-red-600'> {error}  </p>


  </form>
</div>
</div>
</div>
    </div>
    );
};

export default SignUp;
import React, { useRef, useState } from 'react';
import {  createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../FaireBase/FairBase';
import { Link } from 'react-router-dom';
const Register = () => {
const [success,SetSucsses]=useState(false);
const [errorMesage,setErrorMesage] =useState('')
const emailRef = useRef()



  const handleLogin=(e)=>{
  
e.preventDefault()
const email = e.target.email.value;
const password = e.target.password.value;
console.log(email,password)
setErrorMesage('')
SetSucsses(false)
createUserWithEmailAndPassword(auth,email,password)
.then(result =>{
    console.log(result);
    SetSucsses(true)
})
.catch((error)=>{
    console.log(error);
    setErrorMesage(error)
})

  }

  const handlePasswordReset =()=>{
    console.log('get me email password',emailRef.current.value)
    const email = emailRef.current.value;
    if(!email){
      console.log('plese provaide a email')
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(result=>{
        alert('cheak your email')
      })
    }
  }
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a   onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        {
  success && <div>
    <h3 className=' text-green-600 text-center'>your Login success</h3>
  </div>
}
{
  setErrorMesage && <div>
    <h1 className=' text-center text-red-500'>{errorMesage.message}</h1>
  </div>
}
{
  <p>new to this website <Link to='/signin'>SignIn</Link></p>
}
      </form>

   
    </div>
    
  </div>
  
</div>


        </div>
    );
};

export default Register;
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from '../../FaireBase/FairBase';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const [sucsses, SetSucsses] = useState(false);
  const [errorMesage, setErrorMesage] = useState('')
  const [show, setShow] = useState(false)
  
  const handleFrom = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    setErrorMesage('')
    SetSucsses(false);
    if(!terms){
    setErrorMesage('plese accepts our terms and condition ');
    return
    }
    if (password.length < 6) {
      setErrorMesage('password shoud be at least 6 carektar');
      return
    }
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!pattern.test(password)) {
      setErrorMesage('at list a number 1 uppercase 1 lower case and one spatial number');
      return
    }


    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result)
        SetSucsses(true)
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          console.log('email varification done')
        })
      })
      .catch(error => {
        console.log(error.message)
        setErrorMesage(error.message)
      })

      
  }
  
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl text-black'>SignIn</h1>
      <form onSubmit={handleFrom} className='max-w-lg mx-auto'>
        <div class="card w-full max-w-sm shrink-0 shadow-2xl ">
          <div class="card-body relative">
            <fieldset class="fieldset">
              <label class="fieldset-label">Email</label>
              <input type="email" name='email' className="input " placeholder="Email" />
              <label class="fieldset-label">Password</label>
              <input type={show ? 'text' : 'password'} name='password' className="input " placeholder="Password" />
              <button onClick={() => {
                setShow(!show)
              }} className='btn btn-sm absolute right-12 top-34 '>{
                  show ? <FaEyeSlash></FaEyeSlash> : <FaEye color=''></FaEye>
                }</button>

              <div className="form-control">
              <input type="checkbox"
              name='terms' defaultChecked className="checkbox checkbox-success" />
                <label className="cursor-pointer label required:">
                  <span className="label-text ml-2">Remember me</span>
                
                </label>
              </div>
              <button class="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>

      {

        errorMesage && <div>
          <h3 className='text-2xl text-center'>{errorMesage}</h3>
        </div>
      }

      {
        sucsses && <div>
          <h3 className='text-2xl text-center text-green-600'>SignIn is Sucssesfully</h3>
        </div>
      }
      {
        <p className=' text-center mr-18'>alredy have a account? plese <Link to='/register'>SignIn</Link></p>
      }
    </div>

  );
};

export default SignIn;
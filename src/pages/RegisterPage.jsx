import Button from '../components/Button';
import { useState, useRef } from 'react';
import { useNavigate } from "react-router";
import usePasswordRequirementsValidator from '../hooks/usePasswordRequirementsValidator';
import { setLoginState, setHashAndSalt } from '../services/StorageManager'; 
import generateHashAndSalt from '../services/PasswordHashGenerator';

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [hasErrorMessage, setHasErrorMsg] = useState("");
  const isSamePassword = useRef("false");
  const navigate = useNavigate();

  const { upperCount, lowerCount, numCount, symbolCount, isValidLength } = usePasswordRequirementsValidator(password);
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (upperCount > 0 && lowerCount > 0 && numCount > 0 && symbolCount > 0 && isValidLength && isSamePassword) {
      const { hash, salt } = await generateHashAndSalt(password);
      console.log(hash, "\n", salt);
      await setHashAndSalt(hash, salt);
      setLoginState("true");
      setHasErrorMsg("");
      navigate("/MainPage");
    } else {
      setHasErrorMsg("Password is incorrect");
    }
  }
  
  function ComparePasswords(input) { 
    if (input === password) {
      isSamePassword.current = true;
      setHasErrorMsg("");
    } else {
      isSamePassword.current = false; 
      setHasErrorMsg("Passwords Don't Match");
    }
  }
  
  function handleSigninClick(event) {
    event.preventDefault();
    navigate("/LoginPage");
  }

  return (
    <div className='w-100 h-150 bg-base-200 border-2 border-secondary shadow-md font-mono tracking-tighter' >
          <h1 className="text-primary text-6xl antialiased text-center pb-12 font-bold mt-5 text-stroke-1">Password Manager</h1>
          <form className='ml-10' onSubmit={handleSubmit}>
            <label className='text-secondary text-2xl font-bold text-stroke-2' for="mPassword1">Create Master Password</label><br />
            <input className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60 mb-6" 
              type="password" id="mPassword1" placeholder="VerySecurePassword123!" maxlength="64" onChange={(event) => setPassword(event.target.value)}></input>  
            <label className='text-secondary text-2xl font-bold text-stroke-2' for="mPassword2">Repeat Master Password</label><br />
            <input className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60" 
              type="password" id="mPassword2" placeholder="Again..." onChange={(event) => ComparePasswords(event.target.value)}></input>
            <div className='flex flex-row justify-between items-center pt-2'>
              <div>
                <p className='text-primary-content text-md self-start'>Already have an account? </p>
                <a href="" className='text-secondary text-md self-start hover:underline no-underline' onClick={handleSigninClick}><b>Sign In</b></a>
              </div>
              <Button text="Register"/>
            </div>
          </form>
          <div className='bg-[#f3cc0a8a] mx-15 rounded-3xl'>
          <h3 className='text-secondary text-xl font-bold text-center mt-8 text-stroke-3 pt-2'>Password Requirements</h3>
          <ul className='text-primary-content text-center text-md pb-2'>
            <li><span className='text-secondary font-bold text-stroke-4'>16 - 64</span> characters long</li>
            <li><span className='text-secondary font-bold text-stroke-4'>UPPERCASE</span> and <span className='text-secondary font-bold text-stroke-4'>lowercase</span> letters</li>
            <li>At least one <span className='text-secondary font-bold text-stroke-4'>Number</span></li>
            <li>At least one <span className='text-secondary font-bold text-stroke-4'>Special Character</span></li>
            <li className='text-error font-bold text-stroke-4 '>{hasErrorMessage}</li>
          </ul>
          </div>
    </div>
  )
}
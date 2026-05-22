import MyButton from '../components/MyButton';
import { useState, useRef } from 'react';
import { useNavigate } from "react-router";
import usePasswordRequirementsValidator from '../hooks/usePasswordReqsValidator';
import { setLoginState, setHashAndSalt } from '../services/StorageManager'; 
import generateHashAndSalt from '../services/PasswordHashGenerator';
import PasswordRequirementsList from '../components/PasswordReqsList';


export default function RegisterPage() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const { upperCount, lowerCount, numCount, symbolCount, isValidLength, passwordIsValid } = usePasswordRequirementsValidator(password1);
  const isSamePassword = password1 === password2;
  
  async function handleSubmit(event) {  
    event.preventDefault();
    if (passwordIsValid && isSamePassword) {
      const { hash, salt } = await generateHashAndSalt(password1);
      console.log(hash, "\n", salt);
      await setHashAndSalt(hash, salt);
      setLoginState("true");
      navigate("/MainPage");
    } 
  }
  
  function handleSigninClick(event) {
    event.preventDefault();
    navigate("/LoginPage");
  }

  return (
    <div className='w-100 h-150 bg-base-200 border-2 border-secondary font-mono tracking-tighter' >
      <h1 className="text-primary text-6xl antialiased text-center mb-12 font-bold mt-5 text-stroke-1">Password Manager</h1>
      <form className='ml-10' onSubmit={handleSubmit}>
        <label className='text-secondary text-2xl font-bold text-stroke-2' for="mPassword1">Create Master Password</label><br />
        <input className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60 mb-6" 
          type="password" id="mPassword1" placeholder="VerySecurePassword123!" maxlength="64" onChange={(event) => setPassword1(event.target.value)}></input>  
        <label className='text-secondary text-2xl font-bold text-stroke-2' for="mPassword2">Repeat Master Password</label><br />
        <input className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60" 
          type="password" id="mPassword2" placeholder="Again..." maxlength="64" onChange={(event) => setPassword2(event.target.value)}></input>
        <MyButton className='mt-3' disabled={!passwordIsValid || !isSamePassword} text="Register"/>
      </form>
      <div className='bg-amber-400/50  mx-15 rounded-3xl'>
        <h3 className='text-secondary text-xl font-bold text-center mt-4 text-stroke-3 pt-2'>Password Requirements</h3>
        <PasswordRequirementsList 
          upperCount={upperCount}
          lowerCount={lowerCount}
          numCount={numCount}
          symbolCount={symbolCount}
          isValidLength={isValidLength}
          isSamePassword={isSamePassword}
        />
        </div>
    </div>
  )
}
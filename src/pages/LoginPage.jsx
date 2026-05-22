import MyButton from '../components/MyButton';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { setLoginState, getHashAndSalt } from '../services/StorageManager'
import generateHashAndSalt from '../services/PasswordHashGenerator';
import passwordIsValid from '../services/LoginPasswordVerification';
import PasswordField from '../components/PasswordField';

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { hash, salt } = await getHashAndSalt();
    if (await passwordIsValid(password, hash, salt)) {
      await setLoginState("true");
      setErrorMsg("");
      navigate("/MainPage");
    } 
    else {
      setErrorMsg("Password is incorrect");
    }
  }

  function handleRegisterClick(event) {
    event.preventDefault();
    navigate("/RegisterPage");
  }
  return (
    <div className='flex flex-col w-100 h-150 bg-base-200 border-2 border-secondary font-mono tracking-tighter' >
      <div className="grow">
        <h1 className="text-primary text-6xl antialiased text-center mb-25 font-bold mt-5 text-stroke-1">Password Manager</h1>
        <form className='ml-10' onSubmit={handleSubmit}>
          <label className='text-secondary text-2xl font-bold text-stroke-2' for="mPassword">Master Password</label><br />
            <PasswordField
              id="mPassword"
              placeholder="VerySecurePassword123!"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              maxlength="64"
            />
            <MyButton className='mt-3' text="Sign in" />
          <p className='error font-bold mt-15 text-center'>{errorMsg}</p>
        </form>
      </div>
      <footer className="footer sm:footer-horizontal border-primary footer-center p-4 border-t-2">
        <aside>
          <p className='text-primary-content'>Copyright © {new Date().getFullYear()} - All right reserved by Me</p>
        </aside>
      </footer>
    </div>
  )
}


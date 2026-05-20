import Button from '../components/Button';
import { useState } from 'react';
import { useNavigate } from "react-router";

export default function LoginPage() {
  const password = "12345";
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (input === password) {
      chrome.storage.session.set({ isLoggedIn: "true" });
      setErrorMsg("");
      navigate("/MainPage");
    } else {
      setErrorMsg("Password is incorrect");
    }
  }

  function handleRegisterClick(event) {
    event.preventDefault();
    navigate("/RegisterPage");
  }

  return (
    <div className='flex flex-col w-100 h-150 bg-base-200 border-2 border-secondary shadow-md font-mono tracking-tighter' >
      <div className="grow">
        <h1 className="text-primary text-6xl antialiased text-center pb-22 font-bold mt-5 text-stroke-1">Password Manager</h1>
        <form className='ml-10' onSubmit={handleSubmit}>
          <label className='text-secondary text-2xl font-bold text-stroke-2' for="mPassword">Master Password</label><br />
          <input className="input border-primary-content mt-2 focus:outline-amber-400 focus:border-primary-content focus:placeholder:opacity-0 bg-base-200" type="password" id="mPassword"
            placeholder="VeryStrongPassword123!" onChange={(event) => setInput(event.target.value)}></input>
          <div className='flex flex-row justify-between items-center pt-2'>
            <div>
              <p className='text-primary-content text-md self-start'>Want a new account? </p>
              <a href="" className='text-secondary text-md self-start hover:underline no-underline' onClick={handleRegisterClick}><b>Create one!</b></a>
            </div>
            <Button text="Sign in" />
          </div>
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


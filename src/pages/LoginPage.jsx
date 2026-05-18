import Button from '../components/Button';
import { useState } from 'react';
import { useNavigate } from "react-router";

export default function LoginPage() {
  const password = "12345";
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); 
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    if (input === password) {
      chrome.storage.session.set({ isLoggedIn: "true" });
      setErrorMsg("")
      navigate("/MainPage")
    } else {
      setErrorMsg("Password is incorrect")
    }
  }
  return (
    <div className='flex flex-col w-100 h-150 bg-base-100 border border-accent rounded-lg shadow-md font-mono tracking-tighter' >
      <div className="grow p-4">
        <h1 className="text-primary text-5xl antialiased text-center pb-25 font-bold mt-5">Password Manager</h1>
        <form onSubmit={handleSubmit}>
          <label className='text-secondary ml-6 text-xl' for="mPassword">Master Password:</label><br/>
          <input className="input border-accent mt-1 focus:placeholder:opacity-0 ml-6" type="password" id="mPassword" 
            placeholder="Verycoolpassword123!" onChange={(event) => setInput(event.target.value)}></input>
          <div className='flex flex-row justify-between items-center mx-6 pt-2'>
            <a href="" className='text-accent text-xs self-start hover:underline no-underline'>forgot password?</a>
            <Button />
          </div>
          <p className='mt-15 text-center'>{errorMsg}</p>
        </form>
      </div>
      <footer className="footer sm:footer-horizontal border-accent footer-center p-4 border-t">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Me</p>
        </aside>
      </footer>
    </div>
  )
}


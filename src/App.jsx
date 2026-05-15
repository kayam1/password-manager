import Button from './components/Button';
import { useState } from 'react';

export default function MyApp() {
  const password = "12345";
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); 
  let isLoggedIn = false;
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(password);
    console.log(input);
    if (input === password) {
      isLoggedIn = true;
      setErrorMsg("")
    } else {
      setErrorMsg("Password is incorrect")
    }
    console.log(isLoggedIn);
  }
  return (
    <div className='flex flex-col w-[400px] h-[600px] rounded-lg shadow-md font-mono tracking-tighter'>
      <div className="grow p-4 bg-slate-200">
        <h1 className="text-5xl antialiased text-center pb-25 font-semibold mt-5">Password Manager</h1>
        <form onSubmit={handleSubmit}>
          <label className='ml-6 text-lg' for="mPassword">Master Password:</label><br/>
          <input className="input input-error mt-1 bg-slate-300 focus:placeholder:opacity-0 focus:bg-rose-200 ml-6" type="password" id="mPassword" placeholder="Verycoolpassword123!" onChange={(e) => setInput(e.target.value)}></input>
          <div className='flex flex-row justify-between items-center mx-6 pt-2'>
            <a href="" className='text-xs self-start text-rose-400 hover:underline no-underline'>forgot password?</a>
            <button className='btn bg-rose-300 font-semibold'>Login</button>
          </div>
          <p>{errorMsg}</p>
        </form>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-slate-300  p-4 border-t-2 border-rose-300">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Me</p>
        </aside>
      </footer>
    </div>
  )
}


import { useState } from 'react';
import PasswordField from "../components/PasswordField";
import MyButton from '../components/MyButton';
import { setVaultEntry } from '../services/StorageManager';


export default function AddPasswordPage({setActiveTab}) {
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.trim() === "" || website.trim() === "" || username.trim() === "") {
      setErrorMsg("Please fill out the entire form");
    }
    else {
      setErrorMsg("");
      await setVaultEntry(website, username, password);
      setActiveTab("vault");
    }
  }

  return (
    <>
      <h1 className='text-secondary text-5xl text-center font-bold mt-8 mb-15 text-stroke-1 mx-6'>Add Password to Vault</h1>
        <form className='ml-10' onSubmit={handleSubmit}>
          <label className='text-secondary text-2xl font-bold text-stroke-2' for="website">Website Domain</label>
          <input
            id="website"
            type="text"
            placeholder="wwww.CoolWebsite.com"
            maxLength="64"
            onChange={(event) => setWebsite(event.target.value)}
            className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60 pr-14"
          />
          <label className='text-secondary text-2xl font-bold text-stroke-2' for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="CoolestUsernameOfAll"
            maxLength="64"
            onChange={(event) => setUsername(event.target.value)}
            className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60 pr-14"
          />
          <label className='text-secondary text-2xl font-bold text-stroke-2' for="password">Password</label><br />
            <PasswordField
              id="password"
              placeholder="VerySecurePassword123!"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              maxlength="64"
            />
            <MyButton className='mt-3' text="Save to Vault" type="submit"/>
            <p className='text-error font-bold mt-5 text-center'>{errorMsg}</p>
        </form>
    </>
  ) 
}

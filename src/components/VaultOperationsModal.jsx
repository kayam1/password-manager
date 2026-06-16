
import { useState, useEffect } from "react";
import MyButton from "./MyButton";
import PasswordField from "./PasswordField";


export default function VaultOperationsModal({open, close, entry, onEdit, onDelete}) {
  if (!open) return null;

  const [password, setPassword] = useState(entry.password);
  const [website, setWebsite] = useState(entry.website);
  const [username, setUsername] = useState(entry.username);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.trim() === "" || website.trim() === "" || username.trim() === "") {
      setErrorMsg("Please fill out the entire form");
    }
    else {
      setErrorMsg("");
      onEdit(entry.id, {website, username, password})
      close();
    }
  }

return (
  <div 
    onClick={close}
    className="fixed inset-0 flex justify-center items-center z-10"
  >
    <div 
      onClick={(e) => e.stopPropagation()}
      className= "m-auto w-84 h-90 bg-base-200 border-secondary border-4 rounded-2xl"
    >
      <form className='ml-1 mt-10' onSubmit={handleSubmit}>
        <label className='text-secondary text-lg font-bold text-stroke-2' for="website">Website Domain</label>
        <input
          id="website"
          type="text"
          value={website}
          maxLength="64"
          onChange={(event) => setWebsite(event.target.value)}
          className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60 pr-14"
        />
        <label className='text-secondary text-lg font-bold text-stroke-2' for="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          maxLength="64"
          onChange={(event) => setUsername(event.target.value)}
          className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60 pr-14"
        />
        <label className='text-secondary text-lg font-bold text-stroke-2' for="password">Password</label><br />
          <PasswordField
            id="password"
            placeholder="VerySecurePassword123!"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            maxlength="64"
            position="right-3.5"
          />
        <div className="flex flex-row justify-between mt-3">
          <MyButton 
            className="ml-14" 
            text="Edit" 
            type="submit"
          />
          <MyButton
            type="button"  
            text="Delete"
            className="mr-15"
            onClick={() => {
              onDelete(entry.id);
              close();
            }}
          />
        </div>
          <p className='text-error font-bold mt-5 text-center'>{errorMsg}</p>
      </form>
      
    </div>
  </div>
);
}
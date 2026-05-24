import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton"
import { removeHashAndSalt, setLoginState } from "../services/StorageManager"

export default function SettingsPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className='text-secondary text-5xl text-center font-bold mt-8 mb-10 text-stroke-1'>Settings</h1>
        <MyButton className='mt-2 ml-10 text-center' text='remove passwords' onClick={async () => 
        { 
          await removeHashAndSalt();
          navigate("/RegisterPage");
          await setLoginState("false");
        }}
      />
    </>
  )
}

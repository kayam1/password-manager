import MyButton from "../components/MyButton"
import { useNavigate } from "react-router";
import { removeHashAndSalt } from "../services/StorageManager"
import { setLoginState } from "../services/StorageManager";

export default function MainPage() {
    const navigate = useNavigate();

    return(
        <div className='w-100 h-150 bg-base-200 border-2 border-secondary font-mono tracking-tighter'>
            <h1 className='text-primary text-5xl text-center font-bold mt-8 mb-10'>Main Page</h1>
            <MyButton className='mt-2 text-center' text='remove passwords' onClick={async () => 
                { 
                    await removeHashAndSalt();
                    navigate("/RegisterPage");
                    await setLoginState("false");
                }}
            />
        </div>
    )
}
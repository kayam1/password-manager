import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyButton from "../components/MyButton"
import { removeHashAndSalt, setLoginState, clearVault } from "../services/StorageManager"
import SimpleModal from "../components/SimpleModal";

export default function SettingsPage({setActiveTab}) {
  const navigate = useNavigate();
  const [confirmModal, setConfirmModal] = useState({open: false, onConfirm: null});

  async function handleDeleteMaster() {
    await removeHashAndSalt();
    await setLoginState("false");
    navigate("/RegisterPage");
  }

  async function handleSignOut() {
    await setLoginState("false");
    navigate("/LoginPage");
  }

  async function handleClearVault() {
    await clearVault();
    setActiveTab("vault");
  }

  return (
    <>
      <h1 className='text-secondary text-5xl text-center font-bold mt-8 text-stroke-1'>Settings</h1>
      <MyButton className='block mt-30 mx-auto w-50' text='Sign Out' onClick={() => setConfirmModal({open: true, onConfirm: handleSignOut})}/>
      <MyButton className='block mt-10 mx-auto w-50' text='Clear Password Vault' onClick={() => setConfirmModal({open: true, onConfirm: handleClearVault})}/>
      <MyButton className='block mt-10 mx-auto w-50' text='Reset Master Password' onClick={() => setConfirmModal({open: true, onConfirm: handleDeleteMaster})}/>



      <SimpleModal 
        open={confirmModal.open} 
        onConfirm={confirmModal.onConfirm}
        close={() => setConfirmModal({ open: false, onConfirm: null })}
      >
        <h2 className="text-2xl text-center font-bold mt-6 text-stroke-3 text-secondary">Are you sure?</h2>
      </SimpleModal>
    </>
  )
}

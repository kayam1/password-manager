import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import VaultSettingsSVG from "../components/VaultSettingsSVG";
import MyButton from "../components/MyButton";
import { getVault, setVaultEntry, editVaultEntryById, removeVaultEntryById } from "../services/StorageManager"
import VaultOperationsModal from "../components/VaultOperationsModal";
import SimpleModal from "../components/SimpleModal";


export default function VaultPage() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [openOperationModal, setOpenOperationModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    async function loadVault() {
      const vaultData = await getVault();
      setEntries(vaultData.vault || []);
    }
    loadVault();
  }, []);

  const refreshVault = async () => {
    const vaultData = await getVault();
    setEntries(vaultData.vault || []);
  };

  const handleDelete = async (id) => {
    await removeVaultEntryById(id);
    await refreshVault();
  };

  const handleEdit = async (id, updatedFields) => {
    await editVaultEntryById(id, updatedFields);
    await refreshVault();
  };  

  return (
    <>
    <h1 className='text-secondary text-5xl text-center font-bold mt-8 text-stroke-1'>Your Vault</h1>

    <div className="mt-30 bg-amber-200 pb-2">   
      <div className="overflow-x-auto max-h-87 w-96">
      <table className="table table-sm table-pin-rows table-pin-cols border-primary-content">
        <thead>
          <tr className="align-middle bg-amber-200 text-primary-content">
            <td className="w-10">#</td> 
            <td className="max-w-30">Website</td>
            <td className="max-w-30">Username</td>
            <td className="max-w-30">Password</td>
            <td className="max-w-20">Modified</td>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
          <tr key={entry.id} className="hover:bg-amber-400/20">
            <td>{index + 1}</td>
            <td className="max-w-30 truncate">{entry.website}</td>
            <td className="max-w-30 truncate">{entry.username}</td>
            <td className="max-w-30 truncate">**********</td>
            <td className="max-w-20">{new Date(entry.lastModified).toLocaleDateString()}</td>
            <th className="bg-transparent">
              <button 
                className='w-full h-full flex items-center justify-center rounded-full bg-amber-400 text-primary-content hover:bg-amber-500 transition-colors p-1' 
                tabIndex={-1}
                onClick={() =>  {
                  setOpenOperationModal(true);
                  setSelectedEntry(entry);
              }}>
                <VaultSettingsSVG />
              </button>
            </th>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>

<VaultOperationsModal 
  open={openOperationModal} 
  close={() => setOpenOperationModal(false)} 
  entry={selectedEntry} 
  onEdit={handleEdit} 
  onDelete={() => {
    setOpenConfirmModal(true);
    setIdToDelete(selectedEntry.id)
  }}/>

  <SimpleModal 
    open={openConfirmModal} 
    close={() => setOpenConfirmModal(false)}
    onConfirm={() => handleDelete(idToDelete)}
  >
    <h2 className="text-2xl text-center font-bold mt-6 text-stroke-2 text-secondary">Are you sure?</h2>
  </SimpleModal>
</>
  )
}

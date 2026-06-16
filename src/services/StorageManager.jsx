
export async function setHashAndSalt(hashBase64, saltBase64) {  //Store Master Password hash and Salt
  await chrome.storage.local.set({          
    "Master-Password-Hash": hashBase64,
    "Master-Password-Salt": saltBase64,
  }); 
}

export async function getHashAndSalt() {  //get Master Password hash and Salt
  const hashResult = await chrome.storage.local.get(["Master-Password-Hash"]);
  const saltResult = await chrome.storage.local.get(["Master-Password-Salt"]);
  return { hash: hashResult["Master-Password-Hash"], salt: saltResult["Master-Password-Salt"] };
}

export async function removeHashAndSalt() {   //Delete Master Password hash and Salt
  await chrome.storage.local.remove(["Master-Password-Hash", "Master-Password-Salt"]); 
}

export async function hashAndSaltExists() {   //Check for Master Password hash and Salt
  const keys = await chrome.storage.local.getKeys();
  return keys.includes("Master-Password-Hash") && keys.includes("Master-Password-Salt");  
}

export async function setLoginState(state) {
  await chrome.storage.session.set({ isLoggedIn: state });
}

export async function getLoginState() {
  const result = await chrome.storage.session.get(["isLoggedIn"]);
  return result.isLoggedIn;
}

export async function setVaultEntry(website, username, password) {  //Create
  const result = await getVault();
  const currentVault = result.vault || [];  //Default to empty array if nothing exists

  const newId = crypto.randomUUID();
  const newEntry = {
    id: newId, 
    website: website,
    username: username,
    password: password,
    lastModified: new Date().toISOString() 
  };
  const updatedVault = [...currentVault, newEntry];
  await chrome.storage.local.set({ "vault": updatedVault });
}

export async function getVault() {  //Read
  return await chrome.storage.local.get(["vault"]);
}

export async function editVaultEntryById(idToEdit, updatedFields) { //Update
    const result = await getVault();
    const currentVault = result.vault;
    const updatedVault = currentVault.map(entry => 
        entry.id === idToEdit ? { ...entry, ...updatedFields, lastModified: new Date().toISOString() } : entry
    );
    await chrome.storage.local.set({ "vault": updatedVault });
}

export async function removeVaultEntryById(idToDelete) {  //Delete
    const result = await getVault();
    const currentVault = result.vault;
    const updatedVault = currentVault.filter(entry => entry.id !== idToDelete);
    await chrome.storage.local.set({ "vault": updatedVault });
}

export async function clearVault() {  //Delete
    await chrome.storage.local.remove(["vault"]);
}



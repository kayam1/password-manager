

export async function setHashAndSalt(hashBase64, saltBase64) {
  await chrome.storage.local.set({
    "Master-Password-Hash": hashBase64,
    "Master-Password-Salt": saltBase64,
  }); //Storing Master Password and Salt
}

export async function getHashAndSalt() {
  const hashResult = await chrome.storage.local.get(["Master-Password-Hash"]);
  const saltResult = await chrome.storage.local.get(["Master-Password-Salt"]);
  return { hash: hashResult["Master-Password-Hash"], salt: saltResult["Master-Password-Salt"] };
}

export async function removeHashAndSalt() {
  await chrome.storage.local.remove(["Master-Password-Hash", "Master-Password-Salt"]); //Deleting Master Password and Salt
}

export async function hashAndSaltExists() {
  const keys = await chrome.storage.local.getKeys();
  return keys.includes("Master-Password-Hash") && keys.includes("Master-Password-Salt");  //Checks for the existence of Master Password and Salt
}

export async function setLoginState(state) {
  await chrome.storage.session.set({ isLoggedIn: state });
}

export async function getLoginState() {
  const result = await chrome.storage.session.get(["isLoggedIn"]);
  return result.isLoggedIn;
}


export default async function generateHashAndSalt(password) {

  //Generating CryptoKey
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password); //String to Binary Array
  const myCryptoKey = await crypto.subtle.importKey("raw", passwordData, "PBKDF2", false, ["deriveBits"]);	//generate key for the PBKDF2 hashing algorithm using password data

  //Generating Unique Salt 
  const salt = crypto.getRandomValues(new Uint8Array(16)); //Initializing 16 byte Binary Array
  const saltBase64 = salt.toBase64(); //BASE64 string for storage

  //Generating the password Hash and storing it in extension local storage
  const myHash = await crypto.subtle.deriveBits( 
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: salt,
      iterations: 600000,
    },
    myCryptoKey,
    256
  );
  const hashBytes = new Uint8Array(myHash);
  const hashBase64 = hashBytes.toBase64(); //BASE64 string for storage

  return { hash: hashBase64, salt: saltBase64 };
}
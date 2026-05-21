

export default async function loginPasswordIsVerified(password, hash, salt) {

  //Generating CryptoKey
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password); //String to Binary Array
  const myCryptoKey = await crypto.subtle.importKey("raw", passwordData, "PBKDF2", false, ["deriveBits"]);	//generate key for the PBKDF2 hashing algorithm using password data

	const saltBytes = Uint8Array.fromBase64(salt);

  //Generating the password Hash and storing it in extension local storage
  const myHash = await crypto.subtle.deriveBits( 
		{
			name: "PBKDF2",
			hash: "SHA-256",
			salt: saltBytes,
			iterations: 600000,
		},
		myCryptoKey,
		256
  );
  const hashBytes = new Uint8Array(myHash);
  const hashBase64 = hashBytes.toBase64(); //BASE64 string for storage

	if (hashBase64 == hash)
  	return true;
	else
		return false;
}
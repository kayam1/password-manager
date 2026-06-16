
export default function usePasswordRequirementsValidator(input) { 

  const MIN_PASS_LENGTH = 8;
  let upperCount = 0;
  let lowerCount = 0;
  let numCount = 0;
  let symbolCount = 0;
  let isValidLength;
  let passwordIsValid;

  if (input.length >= MIN_PASS_LENGTH) {
    isValidLength = true;
  } else {
    isValidLength = false;
  }
  
  for (let i=0; i < input.length; i++) {
    if (/[a-z]/.test(input[i])) {  //lowercase letters
    lowerCount++;
    } 
    else if (/[A-Z]/.test(input[i])) { //uppercase letters
    upperCount++;
    } 
    else if (/[0-9]/.test(input[i])) { //numbers
    numCount++;
    } 
    else if (/[^A-Za-z0-9]/.test(input[i])) { //symbols
    symbolCount++;
    }
  }

  (upperCount > 0 && lowerCount > 0 && numCount > 0 && symbolCount > 0 && isValidLength) ? passwordIsValid = true : passwordIsValid = false;

  return { upperCount: upperCount, lowerCount: lowerCount, numCount: numCount, symbolCount: symbolCount, isValidLength, passwordIsValid };
}
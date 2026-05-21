import { useRef } from "react";

export default function usePasswordRequirementsValidator(input) { 

  const charUpperCount = useRef(0);
  const charLowerCount = useRef(0);
  const numCount = useRef(0);
  const symbolCount = useRef(0);
  let isValidLength;

    if (input.length > 16) {
      isValidLength = true;
    } else {
      isValidLength = false;
    }
    
    let lastInput = (input.charAt(input.length-1));
    if (/[a-z]/.test(lastInput)) {  //lowercase letters
      charLowerCount.current++;
      console.log("letter: "+lastInput);
    } else if (/[A-Z]/.test(lastInput)) { //uppercase letters
      charUpperCount.current++;
      console.log("letter: "+lastInput);
    } else if (/[0-9]/.test(lastInput)) { //numbers
      numCount.current++;
      console.log("number: "+lastInput);
    } else if (/[^A-Za-z0-9]/.test(lastInput)) { //symbols
      symbolCount.current++;
      console.log("symbol: "+lastInput);
    }

    return { upperCount: charUpperCount.current, lowerCount: charLowerCount.current, numCount: numCount.current, symbolCount: symbolCount.current, isValidLength };
  }
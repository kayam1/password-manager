
  export default function PasswordRequirementsList({upperCount, lowerCount, numCount, symbolCount, isValidLength, isSamePassword}) {
    console.log(upperCount, lowerCount, numCount, symbolCount, isValidLength, isSamePassword);
    function getIcon(condition) {
      return condition ? "✓" : "✗";
    }

    return (
      <ul className='text-primary-content text-left text-xs pb-2 ml-10'>
      <li><span className='text-secondary font-bold text-stroke-4'>8 - 64</span> characters long {getIcon(isValidLength)}</li>
      <li><span className='text-secondary font-bold text-stroke-4'>UPPERCASE</span> and <span className='text-secondary font-bold text-stroke-4'>lowercase</span> 
        &nbsp;letters {getIcon(upperCount > 0 && lowerCount > 0)}</li>
      <li>At least one <span className='text-secondary font-bold text-stroke-4'>Number</span> {getIcon(numCount > 0)}</li>
      <li>At least one <span className='text-secondary font-bold text-stroke-4'>Special Character </span> {getIcon( symbolCount > 0)}</li>
      <li><span className='text-secondary font-bold text-stroke-4'>Both</span> password are <span className='text-secondary font-bold text-stroke-4'>Matching</span> 
        &nbsp;{getIcon(isSamePassword)}</li>
      </ul>
    );
  }

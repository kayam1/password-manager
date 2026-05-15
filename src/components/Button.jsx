import { useState } from 'react';

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="bg-blue-500 text-white px-5 py-2 rounded m-2 block" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
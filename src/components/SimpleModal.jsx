import MyButton from "./MyButton";

export default function SimpleModal({open, close, onConfirm, children}) {
  if (!open) return null;

  function handleConfirm() {
    onConfirm();
    close();
  };

  return (
  <div 
    onClick={close}
    className="fixed inset-0 flex justify-center items-center z-20"
  >
    <div 
      onClick={(e) => e.stopPropagation()}
      className= "m-auto w-84 h-40 bg-base-200 border-secondary border-4 rounded-2xl"
    >
      {children}
      <div className="flex flex-row justify-between mt-4">
        <MyButton className='ml-15 w-20' text='Yes' onClick={handleConfirm}></MyButton>
        <MyButton className='mr-15 w-20' text='No' onClick={close}></MyButton>
      </div>
    </div>
  </div>
  );
}



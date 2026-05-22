
export default function MyButton({ text, onClick, className, disabled }) {
  return (
    <button className={`btn btn-primary font-bold disabled:bg-amber-400/50 disabled:text-primary-content/60 ${className || ""}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
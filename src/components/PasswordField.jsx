
import { useState } from "react";
import OpenEyeSVG from "./OpenEyeSVG";
import ClosedEyeSVG from "./ClosedEyeSVG";

export default function PasswordField({ id, placeholder, value, onChange, maxlength, position = "right-11.5"}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxlength}
        className="input border-primary-content mt-2 focus:outline-primary focus:placeholder:opacity-0 bg-base-200 placeholder-primary-content placeholder:opacity-60"
      />
      <div className= {`absolute top-7 -translate-y-1/2 flex items-center gap-2 ${position}`}>
        <div className="h-10 w-px bg-primary-content/60"/>
        <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            tabIndex={-1}
            className="text-primary-content/60 hover:text-primary transition-colors p-2 -m-2 cursor-pointer flex items-center"
        >
            {isVisible ? <OpenEyeSVG /> : <ClosedEyeSVG />}
        </button>
      </div>
    </div>
  );
}
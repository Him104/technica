import { useRef } from "react";

const Focus = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="click button to focus me "
      />
      <br/>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default Focus;

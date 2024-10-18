import { useRef, useEffect, useState } from "react";

const DomManipulationWithUseEffect = () => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  useEffect(()=> {
    //Foucs Input and manipulate its style when the component mounts
    if(inputRef.current) {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "lightgreen";
    inputRef.current.style.color = "green";
    inputRef.current.style.fontSize = "20px";
  }
  
  return () => {
    console.log('component unmounted')
  }
}
  , []) // Empty array as second argument, it ensures this side effect runs only once after mount

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };


const handleInputChange = (e) => {
    setInputValue(e.target.value)
}


  return (
    <div>
      <input className="border border-green-500 rounded-xl p-2"
        ref={inputRef}
        type="text"
        placeholder="this will be focused and styled" onChange={handleInputChange}
      />
      <br/>
      {/* <button onClick={handleFocus}>Focus Input</button> */}

<p>Typed Value: {inputValue}</p>

    </div>
  );
};

export default DomManipulationWithUseEffect;

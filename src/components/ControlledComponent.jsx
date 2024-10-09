import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(value.length > 3);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 3) {
      toast.error("Input should be more than 3 char");
    } else {
      toast.success(`data submitted : ${inputValue} `);
    }
  };


  



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-500 rounded-md"
          />
        </label>
        <br />
        <button
          type="submit"
          disabled={!isValid}
          className="border border-red-500 bg-red-200 rounded-md"
        >
          Submit
        </button>
      </form>


      <ToastContainer />
    </div>
  );
};

export default ControlledComponent;

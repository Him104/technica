import { useNavigate } from "react-router-dom";

const Demo = () => {
  const handleClick = () => {
    alert("you clicked me");
  };

const navigate = useNavigate();


const handleNavigate = () => {
  navigate('/parent')
}


  return (
    <>
      <div>
        <h1>this is my demo component</h1>
      </div>
      <button onClick={handleClick} className="border border-black p-2">
        Click Me
      </button>
      <br/><br/>
      <button onClick={handleNavigate} className="border border-gray-500 bg-orange-400">Go to Parent</button>
    </>
  );
};

export default Demo;

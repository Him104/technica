import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Demo = () => {

  const location = useLocation();



  const handleClick = () => {
    alert("you clicked me");
  };

const navigate = useNavigate();


const handleNavigate = () => {
  navigate('/parent')
}


if (location.hash) {
const element = document.querySelector(location.hash) 

if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
} 
}

  return (
    <>
      <div>
        <h1 id="demo">this is my demo component</h1>
      </div>
      <button onClick={handleClick} className="border border-black p-2">
        Click Me
      </button>
      <br/><br/>
      <button onClick={handleNavigate} className="border border-gray-500 bg-orange-400">Go to Parent</button>
      <p>Hash : {location.hash}</p>
    </>
  );
};

export default Demo;

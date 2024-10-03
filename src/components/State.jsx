import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(10);
  console.log("this is count: ", count, "this is setCount: ", setCount);
const [name, setName] = useState("Himanshu")


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>count==0 ? null : setCount(count - 1)} className="bg-orange-300" >Increase</button>

      <br/>
    <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="border border-gray-500 rounded-xl p-2 mt-5"></input>
    <h1>Hello, {name}</h1>
    
    </div>
  );
};

export default State;

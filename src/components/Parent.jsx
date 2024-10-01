import Child from "./Child";

const Parent = () => {
    const user = [{id:1, name: "Shubham", age: 28 },
    {id:2, name: "Naman", age: 27 },
    {id:1, name: "Umesh", age: 29 },
    {id:1, name: "Himanshu", age:50 } ]



        //   const arr = ["Himanshu", "Shubham", "Naman", "Umesh"];

  return (
    <div>


      {/* <Child items={arr} user={user} /> */}

      <Child users={user}/>
    </div>
  );
};

export default Parent;

const Demo = () => {
  const handleClick = () => {
    alert("you clicked me");
  };

  return (
    <>
      <div>
        <h1>this is my demo component</h1>
      </div>
      <button onClick={handleClick} className="border border-black p-2">
        Click Me
      </button>
    </>
  );
};

export default Demo;

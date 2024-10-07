import { useState } from "react";

const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(!isLoggedIn);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : isLoggedIn ? (
        <div>
          <h2>Welcome Back, User!</h2>
          <button onClick={handleLogin}> Logout</button>
        </div>
      ) : (
        <div>
          <h2> Please login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Welcome;

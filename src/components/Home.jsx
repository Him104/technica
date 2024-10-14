import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const user = { name: "umesh", age: 23 };

  const gotoProfile = () => {
    navigate("/profile", { state: { user } });
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={gotoProfile}>Go to Profile</button>
    </div>
  );
};

export default Home;

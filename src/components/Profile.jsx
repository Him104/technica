import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div>
      <h1> Profile Page</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Profile;

const Child = ({ users }) => {
  return (
    <div>
      {/* <p>Hello, My name is {user.name} and I am {user.age} years old</p>
       */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            Id: {user.id}, Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;

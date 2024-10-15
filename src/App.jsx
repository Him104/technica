import Demo from "./components/Demo";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Demo2 from "./components/Demo2";
// import Header from "./components/Header";
// import TodoList from "./components/TodoList";
import Parent from "./components/Parent";
import State from "./components/State";
import ControlledComponent from "./components/ControlledComponent";
import Welcome from "./components/Welcome";
import Location from "./components/Location";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Useeffect from "./components/Useeffect";
export default function App() {
  //   const todos = [{id:1, task: 'Learn React', completed: false},
  //     {id:2, task: 'Build Project', completed: true},
  //     {id:3, task: 'Practcing DSA', completed: false}
  //   ];

  return (
    <Router>
      <nav className="bg-gray-400 p-4">
        <ul className="flex list-none justify-around">
          <li className="mx-2">
            <Link to="/">Home </Link>
          </li>
          <li className="mx-2">
            <Link to="/demo">Demo</Link>
          </li>
          <li className="mx-2">
            <Link to="/demo2">Demo2</Link>
          </li>
          <li className="mx-2">
            <Link to="/parent">Parent</Link>
          </li>
          <li className="mx-2">
            <Link to="/state">State</Link>
          </li>
          <li className="mx-2">
            <Link to="/controlledComp">Controlled Component</Link>
          </li>
          <li className="mx-2">
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Header title="My to-do List"/> */}
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo2" element={<Demo2 />} />
        {/* <TodoList todos={todos}/> */}

        <Route path="/parent" element={<Parent />} />
        <Route path="/state" element={<State />} />
        <Route path="/controlledCom" element={<ControlledComponent />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="user/location" element={<Location/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="data-fetching" element={<Useeffect/>}/>

      </Routes>
    </Router>
  );
}

// import Demo from "./components/Demo";

// import Demo2 from "./components/Demo2";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
export default function App() {
  const todos = [{id:1, task: 'Learn React', completed: false},
    {id:2, task: 'Build Project', completed: true},
    {id:3, task: 'Practcing DSA', completed: false}
  ];

  return (
    <>
<Header title="My to-do List"/>
      {/* <Demo />
      <Demo2 /> */}
      <TodoList todos={todos}/>
    </>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Do something nice",
      isComplete: false,
    },
    {
      id: 2,
      title: "Do something funny",
      isComplete: false,
    },
    {
      id: 3,
      title: "Just do something...",
      isComplete: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState("");
  const [todoId, setTodoId] = useState(0);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: todoId,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setTodoInput("");
    setTodoId(prevTodoId => prevTodoId + 1);
  };

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <div className="App w-[600px] py-12 px-4 mt-16 flex flex-col items-center justify-center mx-auto my-0 border border-solid rounded border-[#6419E6]">
      <div className="todo">
        <h2 className="mt-[-12px] mb-4 text-center text-2xl">
          Another ToDo App
        </h2>
        <form action="#" onSubmit={addTodo}>
          <input
            value={todoInput}
            onChange={handleInput}
            type="text"
            placeholder="Insert task"
            className="py-2 px-6 rounded drop-shadow-md"
          />
        </form>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li className="flex flex-row justify-center items-center gap-4 my-4">
            <div className="w-[200px]">
              <input type="checkbox" />
              <span className="ml-4">{todo.title}</span>
            </div>
            <button className="py-2 px-4 bg-red-400 rounded text-black">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div>
        <div>
          <div>Check all</div>
        </div>
        <span>X items remaining</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-16 mt-8">
          <button className="flex justify-center items-center w-[100px] h-[42px] bg-slate-800 rounded overflow-hidden">
            All
          </button>
          <button className="flex justify-center items-center w-[100px] h-[42px] bg-slate-800 rounded overflow-hidden">
            Active
          </button>
          <button className="flex justify-center items-center w-[100px] h-[42px] bg-slate-800 rounded overflow-hidden">
            Completed
          </button>
        </div>
        <div className="mt-4">Clear completed</div>
      </div>
    </div>
  );
}

export default App;

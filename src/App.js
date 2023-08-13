import {useState} from 'react';

import Heading from './Heading';
import TodoList from './TodoList';
import Button from './Button';
import FormAddTodo from './FormAddTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  const handleCompleteTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
    );
  };
  const handleShowAddTodo = () => {
    setShowAddTodo((curStatus) => !curStatus);
  };
  const handleAddTodo = (todo) => {
    setTodos((todos) => [...todos, todo]);
    setShowAddTodo(false);
  };

  return (
    <div className="App">
      <Heading />
      <TodoList todos={todos} onToggleTodo={handleCompleteTodo} />
      {showAddTodo ? <FormAddTodo onAddTodo={handleAddTodo} /> : ''}
      <Button onClick={handleShowAddTodo} colorClass={showAddTodo ? 'red' : 'green'}>
        {showAddTodo ? 'close' : 'new todo'}
      </Button>
    </div>
  );
}

export default App;

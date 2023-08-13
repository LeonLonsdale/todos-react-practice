import {useState} from 'react';
import Button from './Button';

export default function FormAddTodo({onAddTodo}) {
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const id = crypto.randomUUID();
    const todo = {
      id,
      description,
      completed: false,
    };

    onAddTodo(todo);
  };
  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="enter todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      />
      <Button colorClass="green" size="medium">
        submit
      </Button>
    </form>
  );
}

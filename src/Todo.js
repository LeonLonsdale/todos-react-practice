import Button from './Button';

export default function Todo({todo, onToggleTodo, onDeleteTodo}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        value={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <span
        style={{marginRight: 'auto', textDecoration: `${todo.completed ? 'line-through' : 'none'}`}}
      >
        {todo.description}
      </span>
      <Button size={'small'} colorClass="red" onClick={() => onDeleteTodo(todo.id)}>
        delete
      </Button>
    </li>
  );
}

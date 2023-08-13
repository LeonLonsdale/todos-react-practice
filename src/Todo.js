export default function Todo({todo, onToggleTodo}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        value={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <span style={todo.completed ? {textDecoration: 'line-through'} : {}}>{todo.description}</span>
    </li>
  );
}

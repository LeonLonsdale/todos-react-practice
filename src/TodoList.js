import Todo from './Todo';

export default function TodoList({todos, onToggleTodo}) {
  if (!todos.length) return <p>You haven't added any Todo's yet!</p>;

  const sortedTodos = todos.slice().sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <ul className="todo-list">
      {sortedTodos.map((todo) => (
        <Todo todo={todo} onToggleTodo={onToggleTodo} key={todo.id} />
      ))}
    </ul>
  );
}

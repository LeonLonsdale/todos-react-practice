export default function Button({onClick, colorClass, children}) {
  return (
    <button className={`btn ${colorClass ? colorClass : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Button({onClick, size, colorClass, children}) {
  return (
    <button
      className={`btn  ${size ? 'btn--' + size : ''} ${colorClass ? colorClass : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

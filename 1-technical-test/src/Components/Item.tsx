interface Props{
    text: string,
    handleRemove: () => void;
}

export default function Item({text, handleRemove}: Props ) {
  return (
    <li>
      {text}
      <button onClick={handleRemove}>Eliminar elemento 🗑</button>
    </li>
  );
}

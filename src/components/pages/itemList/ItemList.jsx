const ItemList = ({ nombre, saludo }) => {
  return (
    <div>
      <p>
        {saludo} {nombre} !
      </p>
    </div>
  );
};

export default ItemList;

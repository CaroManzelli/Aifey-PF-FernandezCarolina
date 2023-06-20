import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  const nombre = "vos";
  return <ItemList nombre={nombre} saludo={saludo} />;
};

export default ItemListContainer;

import { db } from "../../../firebaseConf";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

  let cartQuantity = getQuantityById(id);
  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
  };
  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cartQuantity={cartQuantity}
    />
  );
};

export default ItemDetailContainer;

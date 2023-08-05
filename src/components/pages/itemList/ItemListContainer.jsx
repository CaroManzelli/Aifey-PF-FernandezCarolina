import { useState, useEffect } from "react";
import { db } from "../../../firebaseConf";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    let ifCategory;

    let productsCollection = collection(db, "products");

    if (!categoryName) {
      ifCategory = productsCollection;
    } else {
      ifCategory = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(ifCategory).then((res) => {
      let productsfirestore = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(productsfirestore);
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

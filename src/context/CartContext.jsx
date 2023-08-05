import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let exist = cart.some((element) => element.id === product.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (product.id === element.id) {
          return {
            ...element,
            quantity: product.quantity,
          };
        } else {
          return element;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === +id);

    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;

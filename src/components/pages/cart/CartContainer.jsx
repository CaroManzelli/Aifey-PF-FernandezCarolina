import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "seguro quieres eliminar todo ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se elimino el carrito", "", "error");
      }
    });
  };

  const total = getTotalPrice();

  return (
    <Cart cart={cart} total={total} deleteById={deleteById} limpiar={limpiar} />
  );
};
export default CartContainer;

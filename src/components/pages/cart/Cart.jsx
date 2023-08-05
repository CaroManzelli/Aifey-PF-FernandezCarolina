import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = ({ cart, total, deleteById, limpiar }) => {
  return (
    <div>
      {cart.map((element) => {
        return (
          <div
            key={element.id}
            style={{
              width: "300px",
              height: "450px",
              padding: "20px",
              display: "inline-block",
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "2px",
            }}
          >
            <img src={element.img} alt="" />
            <h3>{element.title}</h3>
            <h3>${element.price}</h3>
            <h4>Cantidad: {element.quantity}</h4>

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => deleteById(element.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <h2>Total: ${total}</h2>
          <div style={{ display: "block", padding: "20 px" }}>
            <Button variant="outlined" color="secondary" onClick={limpiar}>
              Limpiar carrito
            </Button>{" "}
            <Link to="/checkout">
              <Button variant="outlined" color="secondary">
                Terminar compra
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

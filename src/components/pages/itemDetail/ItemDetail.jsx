import { Box } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <Box align="center">
      <h1>{product.title}</h1>
      <img src={product.img} alt="" />
      <p>{product.description}</p>
      <h3>$ {product.price}</h3>

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </Box>
  );
};

export default ItemDetail;

import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../../src/context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();
  return (
    <Badge badgeContent={total} color="secondary">
      <ShoppingCartOutlinedIcon fontSize="large" />
    </Badge>
  );
};

export default CartWidget;

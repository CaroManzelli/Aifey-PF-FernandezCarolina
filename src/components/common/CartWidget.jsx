import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function CartWidget() {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon fontSize="large" />
    </Badge>
  );
}

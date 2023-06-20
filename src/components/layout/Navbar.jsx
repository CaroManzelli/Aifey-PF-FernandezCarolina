import CartWidget from "../common/CartWidget";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static" xs={12}>
          <Toolbar
            sx={{
              backgroundColor: "secondary.light",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Aifey{" "}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Sobre Nosotros
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
              xs={1}
            >
              Productos
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Preguntas Frecuentes
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Contacto
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <CartWidget />{" "}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;

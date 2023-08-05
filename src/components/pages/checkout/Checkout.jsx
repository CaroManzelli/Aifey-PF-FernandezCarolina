import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Checkout = ({ data }) => {
  const { handleSubmit, handleChange, errors, orderId } = data;

  return (
    <div style={{ padding: "40px" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={!!errors.name ? true : false}
            helperText={errors.name}
          />

          <TextField
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={!!errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            type="password"
            label="Pass"
            variant="outlined"
            name="password"
            onChange={handleChange}
            error={!!errors.password ? true : false}
            helperText={errors.password}
          />

          <Button type="submit" variant="outlined" color="secondary">
            Enviar
          </Button>
        </form>
      ) : (
        <h1>la orden es {orderId}</h1>
      )}
    </div>
  );
};

export default Checkout;

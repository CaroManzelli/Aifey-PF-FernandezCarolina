import { Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={counter <= 1}
          variant="outlined"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </Button>
        <h2>{counter}</h2>
        <Button
          disabled={counter >= stock}
          variant="outlined"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </div>
      <br />
      <Button
        variant="outlined"
        fullWidth="true"
        color="primary"
        onClick={() => agregarAlCarrito(counter)}
      >
        <AddShoppingCartOutlinedIcon />
      </Button>
    </div>
  );
};

export default Counter;

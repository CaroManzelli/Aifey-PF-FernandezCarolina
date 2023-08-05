import { Button } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={counter <= 1}
          variant="outlined"
          color="secondary"
          onClick={() => setCounter(counter - 1)}
        >
          <RemoveCircleOutlineOutlinedIcon />
        </Button>
        <h2>{counter}</h2>
        <Button
          disabled={counter >= stock}
          variant="outlined"
          color="secondary"
          onClick={() => setCounter(counter + 1)}
        >
          <AddCircleOutlineOutlinedIcon />
        </Button>
      </div>
      <br />
      <div style={{ width: "30%" }}>
        <Button
          variant="outlined"
          fullWidth
          color="secondary"
          onClick={() => agregarAlCarrito(counter)}
        >
          <AddShoppingCartOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};

export default Counter;

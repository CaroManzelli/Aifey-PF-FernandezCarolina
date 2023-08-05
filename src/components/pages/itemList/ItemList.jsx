import ProductCard from "../../common/productCard/ProductCard";
import { PulseLoader } from "react-spinners";

const ItemList = ({ items }) => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "50px",
        gap: "20px",
      }}
    >
      {items.length > 0 ? (
        items.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <PulseLoader
          color="#451371"
          margin={3}
          size={30}
          speedMultiplier={0.6}
        />
      )}
    </section>
  );
};

export default ItemList;

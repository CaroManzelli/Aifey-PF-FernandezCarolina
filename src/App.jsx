import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const saludo = "Bienvenid@ ";

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;

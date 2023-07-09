import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemList/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemList/itemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const saludo = "Bienvenid@ ";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

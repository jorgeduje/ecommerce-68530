import Navbar from "./components/layouts/navbar/Navbar";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetail />
    </div>
  );
}

export default App;

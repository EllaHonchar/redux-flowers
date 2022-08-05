import Flowers from "./Components/FlowersComponents/Flowers";
import AllCategories from "./Components/Filter/AllCategories";
import Cart from "./Components/Cart/Cart";

function App() {
  return(<div className="App">
    <AllCategories/>
    <Cart/>
    <Flowers/>
  </div>
  );
}

export default App;

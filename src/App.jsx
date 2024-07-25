import Card from "./components/Card";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="mx-auto flex-col lg:flex lg:flex-row  lg:w-full container p-6 lg:p-[88px] gap-8 w-full">
      <ProductList />
      <Card />
    </div>
  );
}

export default App;

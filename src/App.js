import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);

  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  return (
    <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <ProductList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  );
}

export default App;

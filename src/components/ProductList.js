import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const ProductList = ({ isRefresh, setRefresh }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (isRefresh) {
        try {
          const response = await axios.get("http://localhost:8000/api/products");
        //   console.log(response.data)
          setProducts(response.data);
          setRefresh(false); // Stop refreshing after loading data
        } catch (error) {
          setRefresh(false);
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProducts();
  }, [isRefresh, setRefresh]);

  return (
    <ul id="product-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.name} setRefresh={setRefresh} />
      ))}
    </ul>
  );
};

export default ProductList;

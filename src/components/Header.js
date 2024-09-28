import { useState } from "react";
import axios from "axios";

const Header = ({ setRefresh }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const addProduct = async () => {
    const newProduct = {
      product_name: productName,
      category,
      price,
      discount,
    };

    try {
      await axios.post("http://localhost:8000/api/products", newProduct);
      setProductName("");  // Clear the input fields
      setCategory("");
      setPrice(0);
      setDiscount(0);
      setRefresh(true);  // Trigger refresh of the product list

      setTimeout(() => {
        alert("New product added.");
      }, 500);
    } catch (error) {
      console.error("There was an error adding the product:", error);
    }
  };

  return (
    <div id="product-header" className="header">
      <h2>Simple Product App</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Discount"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
      />
      <span className="add-button" onClick={addProduct}>
        Add
      </span>
    </div>
  );
};

export default Header;

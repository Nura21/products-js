import axios from "axios";

const ProductItem = ({ product, setRefresh }) => {
  const updateProduct = async () => {
    const updatedProduct = {
      ...product,
      done: !product.done,
    };

    try {
      await axios.put(`http://localhost:8000/api/products/${product.id}`, updatedProduct);
      console.log("Product updated.");
      setRefresh(true);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${product.id}`);
      console.log("Product deleted.");
      setRefresh(true);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  console.log(product)

  return (
    <li className={`${product.done ? "checked" : ""}`}>
      <div onClick={updateProduct}>{product.name}</div>
      <span className="close" onClick={deleteProduct}>
        x
      </span>
    </li>
  );
};

export default ProductItem;

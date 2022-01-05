import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", price: "", quantity: "" });
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // Update product Name
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedProduct = {
      name: updatedName,
      price: product.price,
      quantity: product.quantity,
    };
    setProduct(updatedProduct);
  };
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.price = updatedPrice;
    setProduct(updatedProduct);
  };
  const handleQuantityChange = (e) => {
    const updatedQuantity = e.target.value;
    const updatedProduct = { ...product };
    updatedProduct.quantity = updatedQuantity;
    setProduct(updatedProduct);
  };
  const handleUpdateProduct = (e) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data.modifiedCount > 0) {
          alert("Product information successfully updated");
          setProduct({});
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h1>Update Product : {product.name}</h1>
      <small> {id}</small>
      <form onSubmit={handleUpdateProduct}>
        <input
          type="text"
          onChange={handleNameChange}
          value={product.name || ""}
          placeholder="Product name.."
        />
        <input
          type="text"
          onChange={handlePriceChange}
          value={product.price || ""}
          placeholder="Product price.."
        />
        <input
          type="text"
          onChange={handleQuantityChange}
          value={product.quantity || ""}
          placeholder="Product quantity.."
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateProduct;

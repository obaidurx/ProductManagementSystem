import React, { useRef } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const newProduct = { name, price, quantity };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product is successfully added");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <h1 class="text-secondary mt-4">Please input your product details</h1>
      <form onSubmit={handleSubmit}>
        {/* <label for="fname">Product Name</label> */}
        <input type="text" ref={nameRef} placeholder="Product Name.." />
        {/* <label for="lname">Product Price</label> */}
        <input type="text" ref={priceRef} placeholder="Product Price.." />
        {/* <label for="country">Product Quantity</label> */}
        <input type="text" ref={quantityRef} placeholder="Product Quantity.." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;

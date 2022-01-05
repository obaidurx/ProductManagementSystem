import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // loadProducts();
  }, []);
  // DELETE A PRODUCT
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure,you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingProduct = products.filter(
              (product) => product._id != id
            );
            setProducts(remainingProduct);
          }
        });
    }
  };

  // const loadProducts = async () => {
  //   const result = await axios.get("http://localhost:5000/products");
  //   setProducts(result.data);
  // };
  return (
    <div className="container">
      <div className="py-4">
        {/* <h1>Product Collection</h1> */}
        <table class="table table-striped border shadow">
          <thead class="thead-light">
            <tr className="h5">
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link
                    to={`/products/update/${product._id}`}
                    className="btn btn-primary mr-4"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-danger "
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;

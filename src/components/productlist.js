import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/productlist");
      const result = await response.json();
      setProduct(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result) {
        getProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1 className="heading">Product List</h1>
      <table id="customers">
        <thead>
          <tr>
            <th>No of product</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Product Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
              <td>
                <button className="button button1"><Link className="button1" to={"/update/"+item._id}> Edit</Link></button>
                <button
                  className="button button2"
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

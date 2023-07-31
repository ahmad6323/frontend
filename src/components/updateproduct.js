import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getproductdetails();
  }, []);
  const getproductdetails = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const Update = async () => {
    console.log(name, price, category, company);
    try {
      let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.warn(result);
      navigate("/");
    } catch (error) {
      console.error("Error updating products:", error);
    }
  };

  return (
    <div className="product">
      <h1>Update product</h1>
      <input
        className="productin"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        className="productin"
        type="text"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      <input
        className="productin"
        type="text"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <input
        className="productin"
        type="text"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      <button onClick={Update} className="btn">
        update product
      </button>
    </div>
  );
};
export default UpdateProduct;

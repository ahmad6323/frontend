import React from "react";
import { useNavigate } from "react-router-dom";
const addProduct = () => {


  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const addproduct = async ()=>{

    if(!name || !price || !category || !company){
        setError(true)
        return false;
    }
    
    const userid  = JSON.parse(localStorage.getItem('users'))._id
    let result = await fetch("http://localhost:5000/product",{
        method:'post',
        body:JSON.stringify({name, price,category,company}),
        headers:{
            "Content-Type" :"application/json"
        }

    });
    result = await result.json();
    console.log(result)
    navigate('/');
  }

  return (
    <div className="product">
      <h1>add a product</h1>
      <input
        className="productin"
        type="text"
        placeholder="enter a product name "
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      { error && !name && <span className="invalid">enter a vaild name</span>}
      <input
        className="productin"
        type="text"
        placeholder="enter a product price "
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
       { error && !price && <span className="invalid">enter a vaild price</span>}
      <input
        className="productin"
        type="text"
        placeholder="enter a product category "
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
       { error && !category && <span className="invalid">enter a vaild category</span>}
      <input
        className="productin"
        type="text"
        placeholder="enter a product company "
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
       { error && !company && <span className="invalid">enter a vaild company</span>}
      <button onClick={addproduct} className="btn">Add product</button>
    </div>
  );
};
export default addProduct;

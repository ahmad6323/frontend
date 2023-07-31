import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import SignUp from "./components/signup";
import PComponent from "./components/Pcomponent"
import Login from './components/login'
import Addproduct from "./components/addproduct"
import ProductList from "./components/productlist"
import Updateproduct from "./components/updateproduct"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PComponent />}>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<Addproduct />}></Route>
          <Route path="/update/:id" element={<Updateproduct />}></Route>
          <Route path="/logout" element={<h1> logout components</h1>}></Route>
          <Route path="/profile" element={<h1>profile components</h1>}></Route>

          </Route>

          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

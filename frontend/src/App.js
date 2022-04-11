import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import Cart from "./components/Cart";
import AddBook from "./components/AddBook";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddBook />}></Route>
        <Route path="/books" element={<Books />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;

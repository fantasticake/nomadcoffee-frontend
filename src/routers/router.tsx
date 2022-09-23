import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import Signup from "../screens/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

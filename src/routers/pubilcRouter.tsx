import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";

const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRouter;

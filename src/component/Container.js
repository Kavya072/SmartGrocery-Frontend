import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Container = () => {
  return (
    <div
      style={{
        height: "100vh",
        margin: "20px",
        backgroundColor: "white",
        border: "1px ",
        // backgroundImage: `url(${backgroundSignup})`,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/Login" Component={Login}></Route>
        </Routes>
      </Router>
      {/* <Login /> */}
    </div>
  );
};

export default Container;

import { Button, Checkbox, TextField } from "@mui/material";

import { MuiTelInput } from "mui-tel-input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div>
        <span
          style={{
            fontSize: "100px",
            fontFamily: "sans-serif",
          }}
        >
          Basket
        </span>
        <p style={{ marginTop: "0px" }}>Create An Account</p>
        <p style={{ color: "gray" }}>Please Type Your information</p>

        <form id="SignIn Form">
          <div
            className="grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "200px 200px",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <TextField
              sx={{ margin: "10px" }}
              label="Full Name"
              variant="outlined"
            />
            <TextField
              sx={{ margin: "10px" }}
              label="Email Address"
              variant="outlined"
            />
            <TextField
              sx={{ margin: "10px" }}
              label="Password"
              variant="outlined"
              type="password"
            />{" "}
            <MuiTelInput
              sx={{ margin: "10px" }}
              placeholder="Enter Contact No"
              defaultCountry={"IN"}
            />
          </div>
          <Checkbox />
          <label>By joining I agree to receive emails from SmartGrocery.</label>
          <br></br>
          <Button
            sx={{ backgroundColor: "black", color: "white" }}
            variant="contained"
          >
            Create An Account
          </Button>
        </form>
      </div>
      <p>
        Already have Account ? {/* <BrowserRouter> */}
        <Link to="/Login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;

import { TextField, Button } from "@mui/material";
import LoginImage from "../LoginImage.jpg";
const Login = () => {
  console.log(LoginImage);
  return (
    <div>
      <span
        style={{
          fontSize: "100px",
          fontFamily: "sans-serif",
          paddingTop: "0px",
        }}
      >
        Basket
      </span>
      <br></br>
      <img
        src={LoginImage}
        style={{ height: "300px", width: "300px" }}
        alt="Login"
      />
      <p style={{ marginTop: "0px" }}>Create An Account</p>
      <p style={{ color: "gray" }}>Please Type Your information</p>
      <form style={{ marginTop: "0px", paddingTop: "0px" }}>
        <TextField
          sx={{ margin: "10px" }}
          label="Email Address"
          variant="outlined"
        />
        <TextField
          type="password"
          sx={{ margin: "10px" }}
          label="Password"
          variant="outlined"
        />
        <br></br>
        <Button
          sx={{ backgroundColor: "black", color: "white" }}
          variant="contained"
        >
          Login{" "}
        </Button>
      </form>
    </div>
  );
};

export default Login;

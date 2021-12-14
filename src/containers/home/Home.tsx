import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Home.scss";

const Home: React.FC = () => {
  const handleSubmit = () => {};
  return (
    <div className="layout">
      <div className="outer">
        <form onSubmit={handleSubmit}>
          <div className="field-padding">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
          </div>
          <div className="field-padding">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="field-padding">
            <Button type="submit" id="outlined-login-button" variant="outlined">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

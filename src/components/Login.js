import React from "react";
import PropTypes from "prop-types"

const Login = (props) => {
  return (
    <nav className="login">
      <h2>Inventory</h2>
      <p>Sign in to manage your sore's inventory</p>
      <button
        className="github"
        onClick={() => {
        props.authenticate("Github");
        }}
      >
        Login With Github
      </button>
      <button
        className="facebook"
        onClick={() => {
          props.authenticate("Facebook");
        }}
      >
        Login With Facebook
      </button>
    </nav>
  );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;

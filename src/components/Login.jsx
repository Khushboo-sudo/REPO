import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { authenticateUser } from "../utils/authAPI";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authenticateUser({ email, password });
      dispatch(login(token));
    } catch (error) {}
  };

  return (
    <div className="container d-flex  align-items-center mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          className="form-control mt-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="btn btn-primary btn-sm mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

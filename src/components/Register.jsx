// src/components/Register.jsx
import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Registering...");
  };

  return (
    <>
      <h2>Register</h2>
      <div className="container d-flex  align-items-center mt-5">
     
      <form onSubmit={handleSubmit}>
        
        <input  className="form-control mt-4" type="text" placeholder="Username" required />
        <input className="form-control mt-4" type="email" placeholder="Email" required />
        <input  className="form-control mt-4" type="password" placeholder="Password" required />
        <button className="btn btn-primary mt-4" type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default Register;

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ uName, setuName, setUser }) {
  const navigate = useNavigate();
  const userLogin = (e) => {
    e.preventDefault();
    setUser(uName);
    navigate("/");
  };
  return (
    <div className="login_wrapper">
      <div className="login">
        <h2>Enter your username</h2>
        <form onSubmit={userLogin}>
          <input
            required
            value={uName}
            type="text"
            onChange={(e) => setuName(e.target.value)}
          />

          <button>Kirish</button>
        </form>
      </div>
    </div>
  );
}

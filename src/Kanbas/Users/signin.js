import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div className="d-flex flex-column w-25 mt-3 wd-section-space">
      <h1>Sign in</h1>
      <input className="form-control mb-2" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control mb-2" type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary" onClick={signin}> Sign in </button>
    </div>
  );
}
export default Signin;
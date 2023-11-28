import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./styles.css"

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            console.log(credentials)
            navigate("/Kanbas/Account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="d-flex flex-column w-25 mt-3 wd-section-space">
        <h1>Sign up</h1>
            {error && <div>{error}</div>}
            <input
                value={credentials.username}
                className="form-control mb-2" 
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })
                } />
            <input
                value={credentials.password}
                className="form-control mb-2" 
                type="password"
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
                  <button className="btn btn-primary" onClick={signup}> Sign up </button>
        </div>
    );
}
export default Signup;
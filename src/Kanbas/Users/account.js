import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import { Link, useParams } from "react-router-dom";

function Account() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Signin");
      };    

    return (
        <div className="w-50 wd-section-space mt-3">
            <h1>
                Account
                <button className="btn btn-primary float-end" onClick={() => navigate("/Kanbas/Signin")}> Sign in </button>
                <button className="btn btn-danger float-end me-2" onClick={() => navigate("/Kanbas/Signup")}> Sign up </button>
            </h1>

            {account && (
                <div>
                    <input className="form-control mb-2" value={account.username}
                        placeholder="Username"
                        onChange={(e) => setAccount({
                            ...account,
                            username: e.target.value
                        })} />
                    <input className="form-control mb-2" value={account.password}
                        placeholder="Password"
                        // type="password"
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input className="form-control mb-2" value={account.firstName}
                        placeholder="First Name"
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input className="form-control mb-2" value={account.lastName}
                        placeholder="Last Name"
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input className="form-control mb-2" value={account.dob}
                        placeholder="DOB"
                        type="date"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input className="form-control mb-2" value={account.email}
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select className="form-select mb-2" onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary w-100 mb-2" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger w-100 mb-2" onClick={signout}>
                        Sign out
                    </button>
                </div>
            )}

            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                Users
            </Link>
        </div>
    );
}
export default Account;
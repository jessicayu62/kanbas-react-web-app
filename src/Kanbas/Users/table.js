import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css"

function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });

    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };

    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);

    return (
        <div className="wd-section-space mt-3">
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input className="form-control " placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                            <input className="form-control " placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input className="form-control" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input className="form-control" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select className="form-select" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>

                        <td>
                            <button className="btn btn-lg text-success text" onClick={updateUser}> <BsFillCheckCircleFill /> </button>
                            <button className="btn btn-lg" onClick={createUser}> <BsPlusCircleFill /> </button>
                        </td>
                    </tr>

                    {users.map((user) => (
                        <tr key={user._id}>
                            <Link to={`/Kanbas/account/${user._id}`}>
                                <td>{user.username}</td>
                            </Link>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => selectUser(user)}> <BsPencil /> </button>
                                <button className="btn btn-danger" onClick={() => deleteUser(user)}> <BsTrash3Fill /> </button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;
import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
import { FaPencil } from "react-icons/fa6";

export default function PeopleDetails({
    fetchUsers,
} : {
    fetchUsers: () => void;
}) {
    const navigate = useNavigate();
    const { uid, cid } = useParams();
    console.log(uid, cid);
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(false);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    //edit first and last name, email, and role
    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName, email, role };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };

    //delete user
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };

    //fetch user
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setEmail(user.email);
        setRole(user.role);
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0">
                <IoCloseSharp className="fs-1" />
            </Link>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)} className="float-end fs-5 mt-2" />
                )}
                {editing && (
                    <FaCheck onClick={() => saveUser()} className="float-end fs-5 mt-2 me-2" />
                )}
                {!editing && (
                    <div onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <input
                        className="form-control w-50"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }
                        }}
                    />
                )}
            </div>
            <b>Email:</b>
            {!editing ? (
                <div>{user.email}</div>
            ) : (
                <input
                    type="email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            )}
            <b>Roles:</b>
            {!editing ? (
                <div>{user.role}</div>
            ) : (
                <select
                    className="form-control mb-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="STUDENT">Student</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Admin</option>
                    <option value="TA">Assistant</option>
                    <option value="USER">User</option>
                </select>
            )}
            <b>Login ID:</b> {user.loginId} <br />
            <b>Section:</b> {user.section} <br />
            <b>Total Activity:</b> {user.totalActivity}
            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end">
                Delete
            </button>
            <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)} className="btn btn-secondary float-start float-end me-2">
                Cancel
            </button>
        </div>
    );
}

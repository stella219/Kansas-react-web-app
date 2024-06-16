import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };

    useEffect(() => { fetchProfile(); }, []);

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };

    const handleDobChange = (e: any) => {
        const dateValue = e.target.value;
        setProfile({ ...profile, dob: dateValue });
    };

    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <div>
                    <input value={profile.username || ""}  
                        className="form-control mb-2"
                        style={{ width: "300px" }}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
                    <input value={profile.password || ""}
                        className="form-control mb-2"
                        style={{ width: "300px" }}
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                    <input value={profile.firstName || ""} 
                        className="form-control mb-2"
                        style={{ width: "300px" }}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
                    <input value={profile.lastName || ""} 
                        className="form-control mb-2"
                        style={{ width: "300px" }}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                    <input value={profile.dob ? profile.dob.split('T')[0] : ""} 
                        className="form-control mb-2"
                        style={{ width: "300px" }}
                        onChange={handleDobChange}
                        type="date" />
                    <input value={profile.email || ""} 
                        className="form-control mb-2"
                        style={{ width: "300px" }}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                    <select 
                        className="form-control mb-2"
                        
                        value={profile.role || ""}
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                        <option value="TA">Assistant</option>
                    </select>
                </div>
            )}
            <button onClick={signout} className="btn btn-danger w-100">
                Sign out
            </button>
        </div>
    );
}

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [newUser, setUser] = useState({
        student_id: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        });

        const data = await res.json();
        if (data.success) {
            localStorage.setItem("token", data.token);
            navigate("/create");
        } else{
            alert(data.message);
        }
    }
    

    return (
        <form onSubmit={handleLogin}>
            <input placeholder="Student ID" value={newUser.student_id} type="number" onChange={(e) => setUser({...newUser, student_id:e.target.value})} />
            <input placeholder="Password" type="password" value={newUser.password} onChange={(e) => setUser({...newUser, password:e.target.value})} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage
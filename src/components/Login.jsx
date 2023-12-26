import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: "",
        department: ""
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const res = await api.post("/login", form)
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        } catch (error) {
            console.error(error.res.data)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="submit">Login</input>
            </form>
        </div>
    )
}

export default Login
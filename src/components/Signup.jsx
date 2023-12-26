import React, { useState } from "react";

const Signup = () => {
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
            const res = await api.post("/register", form)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="submit">Register</input>
            </form>
        </div>
    )
}

export default Signup
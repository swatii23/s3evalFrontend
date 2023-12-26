import React, { useEffect, useState } from "react";

const Home = () => {
    const [notice, setNotice] = useState([])

    useEffect(() => {
        const fetchNotice = async() => {
            const token = localStorage.getItem("token")
            try{
                const res = await fetch(`${process.env.Backend_URL}/notices`,{
                    method: "GET",
                    headers:{
                        "content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                const data = res.json()

                setNotice(data.notices)
            }
            catch(err){
                console.error(err)
            }
        }
        fetchNotice()
    }, [])

    return (
        <div>
            <h2>Home</h2>

        </div>
    )
}

export default Home
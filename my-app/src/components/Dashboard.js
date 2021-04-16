import React, { Fragment, useEffect, useState } from "react";
import SecondNav from "./SecondNav";


const Dashboard = ({ setAuth }) => {
    const [firstname, setFirstName,] = useState("");
    const [lastname, setLastName,] = useState("");
    const [role_id, setRoleId,] = useState("");


    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:3080/dashboard/", {
                method: "POST",
                headers: { jwt_token: localStorage.token }
            });

            const parseData = await res.json();
            setFirstName(parseData.user_firstname);
            setLastName(parseData.user_lastname);
            setRoleId(parseData.role_id);


        } catch (err) {
            console.error(err.message);
        }
    };


    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Fragment>
        <div className="dashboard-container">
            <SecondNav />

        <div>
            <h1>Dashboard</h1>
            <h2>Welcome {firstname} {lastname} {role_id} </h2>


        </div>
            </div>
        </Fragment>
    )
};

export default Dashboard;
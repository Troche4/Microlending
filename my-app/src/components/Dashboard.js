import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SecondNav from "./SecondNav";

const Dashboard = ({ setAuth }) => {
    const [firstname, setFirstName] = useState("");

   async function getFirstName() {
        try {
            const response = await fetch("http://localhost:3080/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();

            setFirstName(parseRes.user_firstname);

        } catch (err) {
            console.error(err.message);
        }
    };

    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logout successfully");
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
        <div className="dashboard-container">
            <SecondNav />

        <div>
            <h1>Dashboard</h1>
            <h2>Welcome { firstname } </h2>
            <button  onClick={e => logout(e)}>SignOut</button>

        </div>
            </div>
        </Fragment>
    )
};

export default Dashboard;
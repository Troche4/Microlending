import React, { Fragment, useEffect, useState } from "react";
import SecondNav from "./SecondNav";
import {useHistory} from "react-router-dom";
import './dashboard.css';

const Dashboard = ({ setAuth }) => {
    const [firstname, setFirstName,] = useState("");
    const [lastname, setLastName,] = useState("");
    const [role_id, setRoleId,] = useState("");
    const history = useHistory()


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
            if(parseData.role_id === 2) {
                history.push("/dashboard2")
            }

        } catch (err) {
            console.error(err.message);
        }
    };


    useEffect(() => {
        getProfile();
    }, []);

    return (

            <div className='dashboard-container'>
                <SecondNav />
                <div className="row">
                    <div className="column1">
                        <div className="card-container">

                            <div className="card-1"style={{width: "70%"}}>
                                <header className="card-container light-grey">
                                    <h3>Bank Manager: {firstname} {lastname} </h3>
                                </header>
                                <div className="card-container">
                                    <p>Loan to be approved:</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="column2">
                        <h3>Column 2</h3>
                    </div>
                </div>
            </div>

    )
};

export default Dashboard;
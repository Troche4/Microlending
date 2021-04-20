import './dashboard2.css';
import React, { Fragment, useEffect, useState } from "react";
import SecondNav from "./SecondNav";



const Dashboard2 = ({ setAuth }) => {
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

        <div className='dashboard2-container'>
            <SecondNav />
            <div className="row">
                <div className="column1">
                    <div className="card-container">

                        <div className="card-1"style={{width: "70%"}}>
                            <header className="card-container light-grey">
                                <h3>Borrower: {firstname} {lastname} </h3>
                            </header>
                            <div className="card-container">
                                <ul>
                                    <li>Loan Request 1</li>
                                    <li>Loan Request 2</li>
                                    <li>Loan Request 3</li>
                                    <li>Loan Request 4</li>
                                    <li>Loan Request 5</li>


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="column2">
                    <h3>Available Loans</h3>
                </div>
            </div>
        </div>

    )
};

export default Dashboard2;
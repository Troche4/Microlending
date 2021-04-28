import './dashboard2.css';
import React, { Fragment, useEffect, useState } from "react";
import SecondNav from "./SecondNav";



const Dashboard2 = ({ setAuth }) => {
    const [firstname, setFirstName,] = useState("");
    const [lastname, setLastName,] = useState("");
    const [role_id, setRoleId,] = useState("");
    const [loan_id, setLoanId,] = useState("");
    const [duration, setDuration,] = useState("");
    const [principal, setPrincipal,] = useState("");
    const [interest, setInterest,] = useState("");


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


            const res2 = await fetch("http://localhost:3080/dashboard/loans", {
                method: "GET",
                headers: { jwt_token: localStorage.token }
            });
            let parseData2 = await res2.json();
            parseData2 = parseData2[1];
            setDuration(parseData2.duration);
            setPrincipal(parseData2.principal);
            setInterest(parseData2.interest*100);

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
                    <h3>Loan Offerings</h3>
                    <div className="card-1"style={{width: "70%"}}>
                    <div className="card-container">

                        <p>
                        Loan 1: Loan Amount: ${ principal }, Duration: { duration } months,  Interest: { interest }%
                        </p>

                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Dashboard2;
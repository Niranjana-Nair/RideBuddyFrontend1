import React, { useEffect } from 'react'
import { Await, Link } from 'react-router-dom'
import Layout from '../../components/navbar/navbar'
import "./FoundPool.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useNavigate } from "react-router-dom";

var temp = JSON.parse(localStorage.getItem("apiData"));
export default function FoundPool() {

    var data;
    const [poolData, setPoolData] = useState(temp)
    useEffect(() => {
        // data = JSON.parse(localStorage.getItem("apiData"));



    }, []);


    const foundPoolData = () => {
        setPoolData(data);
        console.log("PoolData:", poolData);
    }

    const [isCheck, setIsCheck] = useState(false);
    const Navigate = useNavigate();

    
    const confirmRide = (hostedRideId) => {
        setIsCheck(true);
        Navigate(`/confirm-pool/${hostedRideId}`);
      };
    

    return (
        <>
            <Layout>
                <body className='register-body'>
                    {console.log("PoolList", poolData)}

                    <div className="pool-list-container">

                        <h3>List of available pools</h3>


                        <div className="pl-filter">
                            <h4>Filter By Date : </h4>
                            <input className="pl-data" type="date" />
                        </div>



                        {poolData.map((data) => {
                            return (
                                <div key={data.memberId} className="pl-details">

                                    <div className='left'>
                                        <div className='host-icon-pic'>
                                            <img
                                                src={data.imageSrc}
                                                className="host-img"
                                            />
                                        </div>
                                        <div className='pl-host'>
                                            <p className='hostname'>Host Name :{data.hostName} </p>
                                        </div>

                                        <div className="pl-row">
                                            <p>From :{data.startLocation}</p><br></br>
                                            <p>To :{data.endLocation}</p>
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className="request-ride-block">

                                            <button onClick={() => {
                                                confirmRide(data.hostedRideId);}}
                                                className='r-btn'>Request Pool</button>

                                            <div className='btns'>
                                                <FontAwesomeIcon icon="fa-solid fa-square-phone" />
                                                <p>Number of seats:</p>
                                                {data.numberOfSeats}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                </body>
            </Layout>
        </>
    )
}
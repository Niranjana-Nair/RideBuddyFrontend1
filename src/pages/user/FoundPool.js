import React, { useEffect } from 'react'
import { Await, Link } from 'react-router-dom'
import Layout from '../../components/navbar/navbar'
import "./FoundPool.css"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

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
                    <div className="foundpool-container">
                        <p className='foundpool-title'>List Of Available Pools</p>
                        {/* <div className="foundpool-filter">
                            <p className='foundpool-filter-bar'>Filter By Date : </p>
                            <input className="foundpool-data" type="date" />
                        </div> */}
                        {poolData.map((data) => {
                            return (
                                <div key={data.memberId} className="foundpool-details">

                                    <div className='foundpool-left'>

                                        <div className='image-host-name'>
                                            <div className='host-image-profile'>
                                                <img
                                                    src={data.imageSrc}
                                                    className="host-img"
                                                />
                                            </div>
                                            <div className='foundpool-host'>
                                                {data.hostName}
                                            </div>
                                        </div>

                                        <div className="foundpool-row">
                                            From : {data.startLocation}<br></br>
                                            To : {data.endLocation}
                                        </div>
                                    </div>
                                    <div className='foundpool-right'>
                                        {/* <div className="requestride-block"> */}

                                        <button onClick={() => {
                                            confirmRide(data.hostedRideId);
                                        }}
                                            className='requestride-btn'>Request</button>

                                        <div className='call-seat-icons'>
                                            <FontAwesomeIcon icon="fa-solid fa-square-phone" />
                                            <p>Number of seats:</p>
                                            {data.numberOfSeats}
                                        </div>
                                        {/* </div> */}
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
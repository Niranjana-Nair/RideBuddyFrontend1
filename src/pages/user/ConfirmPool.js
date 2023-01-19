import React from 'react'
import Layout from '../../components/navbar/navbar'
import { useState,useEffect } from 'react';
import "./ConfirmPool.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function ConfirmPool() {


    const { hostedRideId } = useParams();
    console.log("hostedid:",hostedRideId)
    console.log("useparams", hostedRideId)
    const Navigate = useNavigate();

    const [ConfirmRide, setConfirmRide] = useState([]);


    useEffect(() => {
        // axios
        //     .get(`https://localhost:7149/api/JoinRide/confirmpool?hostedRideId=${hostedRideId}`)
        //     .then((Response) => {
        //         setConfirmRide(Response.data);
        //         console.log("confirm-pool", Response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        ConfirmYourRide(hostedRideId);
    }, []);



    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    // console.log(val, "data-")


    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        setCounter(counter + 1)
    }

    const handleClick2 = () => {
        setCounter(counter - 1)
    }


    function ConfirmYourRide(hostedRideId) {
        console.log(hostedRideId)
        axios
            .get(`https://localhost:7149/api/JoinRide/confirmpool?hostedRideId=${hostedRideId}`)
            .then((Response) => {
                setConfirmRide(Response.data);
                console.log("confirm-pool", Response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Layout>
                
                        <div key={ConfirmRide.Id} className='confirm-pool-body'>
                            <h3>Confirm Pool Details</h3>
                            <div className='section1'>
                                <div className='profile-and-wheels'>
                                    <div className='profile-card'>
                                        <div className='profile-hostname'>
                                            <div className='host-image'>
                                            <img
                                                src={ConfirmRide.profileSrc}
                                                className="host-picture"
                                            />
                                            </div>
                                            <div className='host-name-id'>
                                                <label>Host Name : {ConfirmRide.fullName} </label><br></br>
                                                <label>Employee ID :{ConfirmRide.employeeId} </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='vehicle-detail-card'>
                                        <div className='wheel-image-name-number'>
                                            <div className='wheel-image'>
                                            <img
                                                src={ConfirmRide.vehicleSrc}
                                                className="vehicle-picture"
                                            />
                                            </div>
                                            <div className='wheel-name-number'>
                                                <label>Vehicle Name : {ConfirmRide.vehicleName}</label><br></br>
                                                <label>Vehicle Number :{ConfirmRide.vehicleNumber} </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='from-to-details'>
                                    <div className='from-to-date-time-seat'>
                                        <div className='from'>
                                            <label>Start Location : {ConfirmRide.startLocation}</label>
                                        </div>
                                        <div className='to'>
                                            <label>Destination:{ConfirmRide.endtLocation}</label>
                                        </div>
                                        <div className='start-time'>
                                            <label>Ride start date:{ConfirmRide.startDate}</label><br></br>
                                            <label>Ride start time: {ConfirmRide.startTime}</label>

                                        </div>
                                        <div>
                                            <label><h5>Select number of seats :</h5></label>
                                            <button className="b1" onClick={handleClick1}>+</button>
                                            {counter}
                                            <button className="b2" onClick={handleClick2}>-</button>

                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className='section2'>
                                <div className='riders-multidropoff'>
                                    <div className='form-card'>
                                        <div className='no-of-riders'>
                                            <h5>Number of Riders:  {counter}</h5>
                                        </div>
                                        <div className='multi-dropoff'>

                                            {/* <input type="password" placeholder="Password" name="confirmPassword" /> */}
                                            <button className='dropoff-button' onClick={() => handleAdd()}>Add {counter} dropoff locations</button>
                                            {val.map((data, i) => {
                                                return (
                                                    <div>
                                                        <input value={data} onChange={e => handleChange(e, i)} />
                                                        <button onClick={() => handleDelete(i)}>x</button>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='confirm-button'>
                                <button className='cr-button'>Request Pool</button>
                            </div>
                        </div>

            </Layout>
        </>
    )
}


import React, { useState, useEffect } from "react";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as Icons from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons';
import { decodeToken } from "react-jwt";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StartRide.css";




export default function StartRide() {



    return (
        <>
            <Layout>
                <div class="register-body">
                    <div className="trip-start-ride">

                        <div className="sr-container">
                            <div className="sr-top-container">
                                <div className=" sr-outer-box">
                                    <div className="sr-detail">
                                        <div className="sr-first">
                                            <div className="sr-row"><p>From :  <Icons.FaMapMarkerAlt /> </p> <br></br></div>
                                            <div className="sr-row"><p>To:  <Icons.FaMapMarkerAlt /></p></div>
                                        </div>
                                        <div className="sr-first">
                                            <div className="sr-seat-row"> <p>Number of seats Left:</p><br></br></div>

                                        </div>
                                        <div className="start-button">
                                            <button className="sr-btn">End Ride</button><br></br>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sr-middle">
                            <div className="sr-left-side">
                                <div className="sr-left-data">
                                    <p>To be received:</p></div>
                            </div>
                        </div>
                        <p className="sbc-title">Buddies Accompanied</p>
                        <div className="sbc-outer-box">



                            <div className="sbc-details">
                                <div className="sbc-first">
                                    <div className="u-icon">
                                        <img className="u-icon-image">

                                        </img>
                                        <br></br>
                                    </div>
                                    <div className="sbc-name"><p>Name</p></div>
                                    <div className="sbc-icon"><Icons.FaPhone /></div>
                                </div>
                                <div className="sbc-first">
                                    <p className="sbc-price">Rs 30.00</p>
                                    <p className="sbc-status">Status : Paid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}
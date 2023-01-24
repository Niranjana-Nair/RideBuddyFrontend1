import React, { useEffect, useState } from "react";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import axios from "axios";
import "./UserProfile.css"
import { AiOutlineMail } from "react-icons/ai"
import {IoIosCall} from "react-icons/io"

const Id = 'SYT859'

export default function UserProfile() {

    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        UserDetails();
    }, []);

    const UserDetails = () => {
        axios
            .get(`https://localhost:7149/api/User/getuserdetails?UserId=` + Id)
            .then((Response) => {
                //setUserDetail(Response.data);
                setUserProfile(Response.data)
                console.log("user-get", Response.data)
                console.log("||", userProfile)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <Layout>
                <body className="register-body">
                    <div class="register-container">
                        <div class="register-content">
                            <form className="register-form" >
                                <div class="register-user-details">
                                    <div class="input-box">
                                        <img className="up-profile-image" src={userProfile.profileSrc}></img>
                                        <br></br>
                                        <div className="up-email"><AiOutlineMail/> {userProfile.email}</div>
                                        <div className="up-email"><IoIosCall></IoIosCall> {userProfile.phoneNumber}</div>
                                    </div>
                                    <div class="input-box">
                                        <div className="up-fullname">{userProfile.fullName}</div>
                                        <div className="up-gender">{userProfile.gender}</div>
                                        <div className="up-empId">{userProfile.employeeId}</div>
                                        <br></br>
                                        <div className="up-dept">Department</div>
                                        <div className="up-dept">{userProfile.department}</div>
                                    </div>
                                    <div class="input-box">
                                        <div class="up-fullname">Vehicles</div>
                                        {userProfile.vehicles?.map((data) => {
                                            return (
                                                <>

                                                    <div className="user-profile-vehicle-block">
                                                        <div className="vehicle-block-left">
                                                            <div className="up-vehiclename">{data.vehicleName}</div>
                                                            <div>{data.vehicleNumber}</div>
                                                            <div>Seats:{data.numberOfSeats}</div>
                                                        </div>

                                                        <img className="up-vehicle-image" src={data.imageSrc}></img>
                                                    </div>

                                                </>
                                            );
                                        })}

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </body>
                <Footer></Footer>
            </Layout>

        </>
    )
}

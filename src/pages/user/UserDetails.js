import React from 'react'
import "./UserDetails.css";

export default function UserDetails() {
    return (
        <>
            <div className="user-profile-container">
                
                    <div className="left-profile">
                        <div className="user-image">

                        </div>
                        <div className="email-phone">
                            <h3>Email : </h3>
                            <h3>Phone Number : </h3><br></br>
                            {/* call icon */}
                        </div>
                    </div>
                    <div className="middle-profile">
                        <div className="name-details">
                            <div className="user-name">
                                <h2>Full Name : </h2><br></br>
                                <h4>Gender : </h4>
                                <h3>Employee ID : </h3>
                                <h4>Department : </h4>
                                <h4>Address : </h4><br></br>
                            </div>
                        </div>
                    </div>
                    <div className="right-profile">
                        <div className="my-wheels">
                            <h2>My Wheels : </h2><br></br>
                            <div className="wheel-detail-image">
                                <div className="wheel-details">
                                    <h2>Vehicle Name : </h2><br></br>
                                    <h3>Vehicle Type : </h3><h3>Vehicle Number : </h3>
                                    <h3>Number of Seats : </h3>
                                </div>
                                <div className="wheel-image">

                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    )
}


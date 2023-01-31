import React, { useState, useEffect } from "react";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import * as Icons from "react-icons/fa";
import * as Icon from "react-bootstrap-icons";
import { decodeToken } from "react-jwt";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CheckRide.css";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

// const Id = "1";

export default function CheckRide() {
  const { id } = useParams();
  console.log("useparams", id);
  const Navigate = useNavigate();
  const [CheckRide, setCheckRide] = useState([]);
  const [invited, setInvited] = useState([]);
  const [Invitedstatusget, setInvitedStatusget] = useState(false);
  const [Acceptedstatusget, setAcceptedStatusget] = useState(false);
  const [Deniedstatusget, setDeniedStatusget] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const statusStart = () => {
    setIsStart(true);
    Navigate("/start-ride");
  };
  useEffect(() => {
    CheckRidesList(id);
    InvitedDetail(id);
  }, []);

  function CheckRidesList(id) {
    axios
      .get(`https://localhost:7149/api/HostRide/getDetailRide?Id=${id}`)
      .then((Response) => {
        setCheckRide(Response.data);
        console.log(" get-checkRide", Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onLoad = (item) => {
    item.map((items) => {
      console.log("itemstatus", items.status)
      if (items.status == 0) {
        setInvitedStatusget(true);
      } else if (items.status == 1) {
        setAcceptedStatusget(true);
      } else if (items.status == 2) {
        setDeniedStatusget(true);
      }

    });
  };

  function InvitedDetail() {
    axios
      .get(`https://localhost:7149/api/HostRide/getInvitedUsers?Id=${id}`)
      .then((Response) => {
        setInvited(Response.data);
        // onData(Response.data);
        onLoad(Response.data);
        // console.log("statusget", invited.status);
        console.log("Invites-get", Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Layout>
        <div class="register-body">
          <div className="trip-check-container">
            {/* {console.log(zero)} */}
            <div className="cr-title">
              {/* <h2>Check Rides</h2> */}
            </div>

            {CheckRide.map((data) => {
              return (
                <div key={data.id} className="cr-container">

                  <div className="cr-detail">
                    <div className="cr-first">
                      <div className="cr-row">
                        <label>
                          From: {data.startLocation}  <Icons.FaMapMarkerAlt />
                        </label>
                        <br></br>
                      </div>
                      <div className="cr-row">
                        <label>
                          To: {data.endLocation}  <Icons.FaMapMarkerAlt />
                        </label>
                      </div>
                    </div>
                    <div className="cr-first">
                      <div className="cr-row">
                        <label>No.of seats left: {data.numberOfSeats}</label>
                        <br></br>
                      </div>
                    </div>
                    <div className="check-buttons">
                      <button onClick={statusStart} className="cr-btn">
                        Start Ride
                      </button>
                      <br></br>
                      <button className="cr-btn">Cancel Ride</button>
                    </div>
                  </div>

                </div>
              );
            })}
            <div className="cr-title">
              You invited them to join
            </div>
            <div className="cr-middile-container">
              {invited.map((data) => {
                return (
                  <div key={data.InvitationId} className="crm-outerbox">
                    <div className="crm-row">
                      <img src={data.imageSrc} className="avatar" />
                      <p> {data.fullName}</p>
                      {Invitedstatusget && <p> Status :Invited </p>}
                      {Acceptedstatusget && <p>  :Accepted </p>}
                      {Deniedstatusget && <p> Status :Turned Down </p>}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="cr-bottom-container"> */}
            <div className="cr-title">They are requesting to join your pool </div>
            <div className="join-request-block">
              <div className="joinee-pic-name">
                <div className="joinee-pic">
                  <img className="joinee-pic">

                  </img>
                </div>
                <div className="joinee-name-id">
                  John<br></br>
                  SYT555
                </div>
              </div>
              <div className="from-to-dropofflocations">
                <div className="from-and-to">
                  From : <br></br><br></br>
                  To :
                </div>
                <div className="seats-needed">
                  Seats requested :
                </div>
              </div>
              <div className="accept-deny">
                <button className="accept">Accept</button>
                <button className="deny">Turn Down</button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </Layout>
      <Footer></Footer>
    </>
  );
}
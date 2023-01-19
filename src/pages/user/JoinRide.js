import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Layout from "../../components/navbar/navbar";
import "./JoinRide.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";


const initialfieldValues = {
    StartLocation: '',
    EndLocation: '',
    StartDate: '',
    StartTime: '',
    MemberId: 'SYT545',
}
export default function JoinRide() {

    const [values, setValues] = useState(initialfieldValues);
    const [errors, setErrors] = useState({});
    const [vehicles, setVehicles] = useState()
    const [userList, setUserList] = useState()
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })

    }
    const validate = (values) => {
        const err = {};
        if (!values.startLocation) {
            err.startLocation = "Start Location is Required";
        }

        if (!values.endLocation) {
            err.endLocation = "End Location is Required";
        }
        return err;

    }
    const resetForm = () => {
        setValues(initialfieldValues)
        setErrors({})
    }

    const handleSubmit = e => {
        console.log('submit hit')
        //console.log(values.MemberId)
        console.log(values)
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
        feedData();

    }
    const UserAPI = (url = 'https://localhost:7149/api/JoinRide/joinriderequest') => {
        let token = localStorage.getItem("token");
        const headers = {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        }
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord, {
                headers: headers
            }),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const PoolAPI = (url = 'https://localhost:7149/api/JoinRide/findpool') => {
        let token = localStorage.getItem("token");
        const headers = {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        }
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord, {
                headers: headers
            }),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }


    const addOrEdit = (formData, onSuccess) => {
        UserAPI().create(formData)
            .then(response => {
                PoolAPI().create(formData)
                    .then(res => {
                        localStorage.setItem("apiData", JSON.stringify(res.data))
                        navigate("/found-pool")
                    })

                onSuccess();
            })
            .catch(err => console.log(err))
    }

    const feedData = () => {
        const formData = new FormData()
        console.log(values.NumberOfSeats)
        formData.append('StartLocation', values.StartLocation)
        formData.append('EndLocation', values.EndLocation)
        formData.append('StartDate', values.StartDate)
        formData.append('StartTime', values.StartTime)
        formData.append('MemberId', values.MemberId)
        const test = {
            'StartLocation': values.StartLocation,
            'EndLocation': values.EndLocation,
            'StartDate': values.StartDate,
            'StartTime': values.StartTime,
            'MemberId': values.MemberId,
        }
        console.log(test)
        addOrEdit(test, resetForm)
    }


    return (
        <>

            <Layout>
                <body className="joinride-body">
                    <div class="joinride-container">
                        <div class="joinride-title">Join A Ride</div>
                        <div class="joinride-content">
                            <form className="joinride-form" onSubmit={handleSubmit}>
                                <div class="joinride-user-details">
                                    <div class="input-box">
                                        <label>Start Location</label>
                                        <input className={"form-control"} type="text" placeholder="Hey,where to pick you from?" name="StartLocation"
                                            value={values.StartLocation}
                                            onChange={handleInputChange} />
                                        <p className="error-text">{errors.StartLocation}</p>
                                    </div>
                                    <div className="column">
                                        <div className="input-box">
                                            <label>Which Date?</label>
                                            <input type="date" className={"form-control"} placeholder="Which Date?" name="StartDate"
                                                value={values.StartDate}
                                                onChange={handleInputChange} />
                                            <p className="error-text">{errors.StartDate}</p>
                                        </div>
                                        <div className="input-box">
                                            <label>And What Time?</label>
                                            <input type="time" className={"form-control"} placeholder="And What Time?" name="StartTime"
                                                value={values.StartTime}
                                                onChange={handleInputChange} />
                                            <p className="error-text">{errors.StartTime}</p>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <label>Destination</label>
                                        <input className={"form-control"} type="text" placeholder="Where do you plan to go?" name="EndLocation"
                                            value={values.EndLocation}
                                            onChange={handleInputChange} />
                                        <p className="error-text">{errors.EndLocation}</p>
                                    </div>
                                </div>

                                <div class="button">
                                    <input type="submit" value="Find Pools" />
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
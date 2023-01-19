import React, { useEffect, useState } from "react";
import "./TestAddUser.css"
import { useNavigate } from "react-router-dom";
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import axios from "axios";

const defaultImageSrc = "/img/userlogo.jpg"

const initialFeildValues = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    email: '',
    number: 0,
    password: '',
    confirmPassword: '',
    gender: '',
    department: '',
    role: 'User',

    profileName: '',
    profileSrc: defaultImageSrc,
    profileFile: null,

    lisenceName: '',
    lisenceSrc: defaultImageSrc,
    lisenceFile: null
}

export default function TestAddUser() {

    const navigate = useNavigate();


    const [values, setValues] = useState(initialFeildValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const UserAPI = (url = 'https://localhost:7149/api/Registration/register') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        UserAPI().create(formData)
            .then(res => {
                onSuccess();
            })
            .catch(err => console.log(err))
    }


    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })

    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    lisenceFile: imageFile,
                    lisenceSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                lisenceFile: null,
                lisenceSrc: defaultImageSrc
            })
        }
    }

    const profileUpdate = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    profileFile: imageFile,
                    profileSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                profileFile: null,
                profileSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        const err = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const idRegex = /^SYT{1}[0-9]{3,4}$/gm;
        const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
        if (!values.firstName) {
            err.firstName = "First Name is Required";
        }

        if (!values.lastName) {
            err.lastName = "Last Name is Required";
        }
        if (!values.email) {
            err.email = "Email is Required";
        }
        else if (!emailRegex.test(values.email)) {
            err.email = "Email is not valid"
        }
        if (!values.password) {
            err.password = "Password is Required";
        }
        else if (!pwdRegex.test(values.password)) {
            err.password = "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
        }
        if (values.confirmPassword !== values.password) {
            err.confirmPassword = "Password's doesnt match"
        }
        if (!values.department) {
            err.department = "Department is Required";
        }
        if (!values.employeeId) {
            err.employeeId = "Employee Id is Required";
        }
        else if (!idRegex.test(values.employeeId)) {
            err.employeeId = "Invalid Employee Id"
        }
        if (!values.number) {
            err.number = "number is Required";
        }
        else if ((values.number).length < 10 || values.number.length > 10) {
            err.number = "number should be 10 digit";
        }
        if (!values.gender) {
            err.gender = "Please select gender";
        }
        if (values.profileSrc == defaultImageSrc) {
            err.profileSrc = "select Profile picture"
        }

        return err;


    }

    const resetForm = () => {
        setValues(initialFeildValues)
        document.getElementById('image-uploader').value = null;
        document.getElementById('license-uploader').value = null;
        setErrors({})
    }

    const handleSubmit = e => {
        console.log('submit hit')
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);

    }

    const submitHandler = () => {
        setIsSubmit(true);
        navigate("/user-login");
    }



    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {

            const formData = new FormData()
            formData.append('lisenceName', values.lisenceName)
            formData.append('lisenceFile', values.lisenceFile)
            formData.append('profileName', values.profileName)
            formData.append('profileFile', values.profileFile)
            formData.append('firstname', values.firstName)
            formData.append('lastName', values.lastName)
            formData.append('email', values.email)
            formData.append('password', values.password)
            formData.append('department', values.department)
            formData.append('number', values.number)
            formData.append('gender', values.gender)
            formData.append('employeeId', values.employeeId)
            formData.append('role', values.role)

            addOrEdit(formData, resetForm)
        }
    }, [errors]);

    return (

        <>
            <Layout>
                <div class="form_wrapper">
                    <div class="form_container">
                        <div class="title_container">
                            <h2>Responsive Registration Form</h2>
                        </div>
                        <div class="row clearfix">
                            <div class="">
                                <form>
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email" required />
                                    </div>
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                        <input type="password" name="password" placeholder="Password" required />
                                    </div>
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                        <input type="password" name="password" placeholder="Re-type Password" required />
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col_half">
                                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                <input type="text" name="name" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div class="col_half">
                                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                <input type="text" name="name" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input_field radio_option">
                                        <input type="radio" name="radiogroup1" id="rd1"/>
                                            <label for="rd1">Male</label>
                                            <input type="radio" name="radiogroup1" id="rd2"/>
                                                <label for="rd2">Female</label>
                                         
                                            <div class="input_field select_option">
                                                <select>
                                                    <option>Select a country</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                                <div class="select_arrow"></div>
                                            </div>
                                            <div class="input_field checkbox_option">
                                                <input type="checkbox" id="cb1"/>
                                                    <label for="cb1">I agree with terms and conditions</label>
                                            </div>
                                            <div class="input_field checkbox_option">
                                                <input type="checkbox" id="cb2"/>
                                                    <label for="cb2">I want to receive the newsletter</label>
                                            </div>
                                            <input class="button" type="submit" value="Register" />
                                        
                                    </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                    </div>
                    <Footer></Footer>
            </Layout>


        </>
    )

}
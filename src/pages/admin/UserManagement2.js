import React from 'react'
import "./UserManagement2.css"
import axios from "axios";
import Layout from "../../components/navbar/navbar";
import { useJwt } from "react-jwt";
import { decodeToken } from "react-jwt";

import Footer from "../../components/footer/footer";
export default function UserManagement2() {
  return (
    <>
      <div className="register-body">
      <table>
        <tr>
          <th className='profileimg'></th>
          <th>Employee ID</th>
          <th>Name</th>
          <th className='dept'>Department</th>
          <th className='viewbutton'></th>

        </tr>
        <tr>
          <td><img alt="Remy Sharp" src="https://bit.ly/dan-abramov" /></td>
          <td>SYT753</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td><button className="view">View</button></td>
        </tr>
        <tr>
          <td><img alt="Remy Sharp" src="https://bit.ly/dan-abramov" /></td>
          <td>SYT738</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td><button className="view">View</button></td>
        </tr>
        <tr>
          <td><img alt="Remy Sharp" src="https://bit.ly/dan-abramov" /></td>
          <td>SYT526</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          <td><button className="view">View</button></td>
        </tr>
        <tr>
          <td><img alt="Remy Sharp" src="https://bit.ly/dan-abramov" /></td>
          <td>SYT157</td>
          <td>Helen Bennett</td>
          <td>UK</td>
          <td><button className="view">View</button></td>
        </tr>
        <tr>
          <td><img alt="Remy Sharp" src="https://bit.ly/dan-abramov" /></td>
          <td>SYT964</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
          <td><button className="view">View</button></td>
        </tr>
        <tr>
          <td><img alt="Remy Sharp" src="https://bit.ly/dan-abramov" /></td>
          <td>SYT794</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
          <td><button className="view">View</button></td>
        </tr>
      </table>
      </div>
     
      </>
  )
}


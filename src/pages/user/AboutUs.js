import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className='about-us-container'>
            <h1 className='about-title'>
                About Us
            </h1>
            <div className='about-us-image'>

                <img src='https://t3.ftcdn.net/jpg/02/21/30/10/240_F_221301042_DnyTwN6iedFcQLueBBj88c73CHWr6Nr9.jpg' className='about-us-Image' height="100px" width="100px">

                </img>
            </div>
            <div className='our-story'>
                <h2 className='rb-story'>Our Story </h2>
                <p className='rb-Story'>
                    The inspiration came from severe parking crunch we faced at our offices. While at the
                    same a number of people would wait at the reception to get the company cab home. A
                    number of employees were also travelling to and fro the same route or destination, but
                    were hesitant to offer rides. It was then, that the idea struck us, to develop a
                    fully automated way for employees to carpool.
                </p>
            </div>
        </div>
    )
}

export default AboutUs

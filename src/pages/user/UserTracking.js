import React from 'react'
import './UserTracking.css'


function UserTracking() {
    return (
        <div className='user-tracking-Container'>
            <div className='user-tracking-Box'>
                <p className='user-tracking-title'>
                    Ride started on date ,time
                </p>
                <div className='usertracking-Card'>
                    <div className='host-Name-Prof'>
                        <div className='hostPicture'>
                            <img className='Host-PIc' src="" height="50px" width="50px">

                            </img>
                        </div>
                        <div className='host-NamE'>
                            John Doe
                        </div>
                        <div className='host-emp-ID'>
                            SYT565
                        </div>
                    </div>
                    <div className='start-dest-pts'>
                        <div className='start-POINT'>
                            From : kakkanad
                        </div>
                        <div className='dest-PNT'>
                            To : infopark
                        </div>
                    </div>
                </div>
                <div className='you-owe'>
                    Pay John Doe 60 Rs
                </div>
                <div className='pay-now-btn'>
                    <button className='pay-BTN'>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserTracking

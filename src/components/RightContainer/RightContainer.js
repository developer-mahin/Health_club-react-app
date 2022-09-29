// import React, { useState } from 'react';
import './RightContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const RightContainer = ({ seconds, setAddBreak, addBreak }) => {

    const handleActivity = () => {
        Swal.fire(
            'Good job!',
            'You are done with your activity!',
            'success'
        )
    }

    return (

        <div>
            <div className='d-flex align-items-center gap-3'>
                <div >
                    <span className='user__icon'>
                        <FontAwesomeIcon icon={faCircleUser} />
                    </span>
                </div>
                <div>
                    <h5>Mahin Khan</h5>
                    <span> <FontAwesomeIcon className='location' icon={faLocationDot} /> Bhuapur, Tangail </span> <br />
                    <span>Front-End-Developer</span><br />
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center shadow rounded my-3 p-3'>
                <div>
                    <div className='d-flex align-items-center'>
                        <h2>54</h2><span className='text-secondary'>KG</span>
                    </div>
                    <div>
                        <h5 className='text-secondary'>Weight</h5>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                        <h2>5.8</h2>
                    </div>
                    <div>
                        <h5 className='text-secondary'>Height</h5>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center'>
                        <h2>23</h2><span className='text-secondary'>yrs</span>
                    </div>
                    <div>
                        <h5 className='text-secondary'>Age</h5>
                    </div>
                </div>
            </div>

            <div className='border rounded shadow p-3 mt-2'>
                <h5 className='text-center'>Add a Break</h5>
                <div className='text-center my-1'>


                    <button onClick={(e) => {
                        setAddBreak((e.target.innerText).slice(0, 2))
                        localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                    }} className='btn btn-primary rounded-circle me-1 p-2'>10s</button>
                    <button onClick={(e) => {
                        setAddBreak((e.target.innerText).slice(0, 2))
                        localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                    }} className='btn btn-primary rounded-circle me-1 p-2'>20s</button>
                    <button onClick={(e) => {
                        setAddBreak((e.target.innerText).slice(0, 2))
                        localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                    }} className='btn btn-primary rounded-circle me-1 p-2'>30s</button>
                    <button onClick={(e) => {
                        setAddBreak((e.target.innerText).slice(0, 2))
                        localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                    }} className='btn btn-primary rounded-circle me-1 p-2'>40s</button>
                    <button onClick={(e) => {
                        setAddBreak((e.target.innerText).slice(0, 2))
                        localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                    }} className='btn btn-primary rounded-circle me-1 p-2'>50s</button>
                </div>
            </div>
            <div className='border rounded shadow mt-md-5 mt-2 p-3'>
                <h5>Exercise Details</h5>
                <div className='border rounded bg-secondary bg-opacity-25 p-3 my-md-3 my-2 d-flex align-items-center justify-content-between'>


                    <h6>Exercise time </h6> <span className='fw-normal ms-5 text-secondary'>

                        {
                            seconds.map(second => <span key={second._id}>{second.time} </span>)
                        }

                        second</span>
                </div>
                <div className='border rounded bg-secondary bg-opacity-25 p-3 my-md-3 my-2 d-flex align-items-center justify-content-between'>
                    <h6>Break time </h6>
                    <span className='fw-normal ms-5 text-secondary'>{addBreak} second</span>
                </div>
            </div>
            <div className='mt-md-5 mt-3'>
                <button onClick={handleActivity} className='w-100 btn btn-outline-success fw-semibold'>Activity Completed</button>
            </div>
        </div >
    );
};

export default RightContainer;
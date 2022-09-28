import React from 'react';
import './RightContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const RightContainer = () => {
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
                    <span> <FontAwesomeIcon className='location' icon={faLocationDot} /> Bhuapur, Tangail </span>
                </div>
            </div>
            <div className='border rounded shadow p-3 mt-2'>
                <h5 className='text-center'>Add a Break</h5>
                <div className='text-center my-1'>
                    <button className='btn btn-primary rounded-circle me-1 p-2'>10s</button>
                    <button className='btn btn-primary rounded-circle me-1 p-2'>20s</button>
                    <button className='btn btn-primary rounded-circle me-1 p-2'>30s</button>
                    <button className='btn btn-primary rounded-circle me-1 p-2'>40s</button>
                    <button className='btn btn-primary rounded-circle me-1 p-2'>50s</button>
                </div>
            </div>
            <div className='border rounded shadow mt-md-5 mt-0 p-3'>
                <h5>Exercise Details</h5>
                <div className='border rounded shadow bg-secondary bg-opacity-25 p-3 my-md-3 my-0 d-flex align-items-center justify-content-between'>
                    <h6>Exercise time </h6> <span className='fw-normal ms-5 text-secondary'>second</span>
                </div>
                <div className='border rounded shadow bg-secondary bg-opacity-25 p-3 my-md-3 my-0 d-flex align-items-center justify-content-between'>
                    <h6>Break time </h6>
                    <span className='fw-normal ms-5 text-secondary'>second</span>
                </div>
            </div>
            <div className='mt-md-5 mt-0'>
                <button className='w-100 btn btn-outline-success fw-semibold'>Activity Completed</button>
            </div>
        </div>
    );
};

export default RightContainer;
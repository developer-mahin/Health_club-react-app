// import React, { useState } from 'react';
import './SingleData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const SingleData = ({ data, handleAddSecond }) => {
    const { exerciseMaterial, about, picture, age, time, _id } = data;
    
    return (
        <div className=''>
            <div className="col">
                <div className="card data__info__card">
                    <img src={picture} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{exerciseMaterial}</h5>
                        <p className="card-text text-secondary">{about ? about.slice(0, 70) + "..." : "data not found"}</p>
                        <p className='age'>For age: <span className='fw-semibold'>{age}-25</span></p>
                        <p>Time required : <span className='fw-semibold'>{time}s</span> </p>

                        <button
                            onClick={() => handleAddSecond(data)}
                            className='btn btn-primary w-100'>Add to list <FontAwesomeIcon icon={faPlus}
                            /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;
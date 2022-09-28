import React from 'react';
import './SingleData.css'

const SingleData = ({ data }) => {
    const { exerciseMaterial, about, picture, age, time } = data;
    console.log(data)

    return (
        <div>
            
            <div className=''>
                <div className="col">
                    <div className="card">
                        <img src={picture} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{exerciseMaterial}</h5>
                            <p className="card-text text-secondary">{about ? about.slice(0, 70) + "..." : "data not found"}</p>
                            <p className='age'>For age: <span className='fw-semibold'>{age}-25</span></p>
                            <p>Time required : <span className='fw-semibold'>{time}s</span> </p>
                            <button className='btn btn-primary w-100'>Add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;
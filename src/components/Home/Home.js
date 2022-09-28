import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './Home.css'


const Home = () => {
    const [gymdatas, setGymdata] = useState([])

    useEffect(() => {

        fetch('gymsData.json')
            .then(res => res.json())
            .then(data => setGymdata(data))

    }, [])

    return (
        <div className='home__container'>
            <div className='row ms-0'>
                <div className="left__side col-md-8 row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-0 bg-secondary bg-opacity-10">
                    {
                        gymdatas.map(data => <SingleData
                            data={data}
                            key={data._id}
                        ></SingleData>)
                    }
                </div>
                <div className="right__side col-md-4 ms-0 ms-md-4">
                    <h2>Right side data</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
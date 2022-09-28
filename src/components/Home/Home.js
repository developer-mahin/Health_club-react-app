import React, { useEffect, useState } from 'react';
import RightContainer from '../RightContainer/RightContainer';
import SingleData from '../SingleData/SingleData';
import Nav from '../Nav/Nav';
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
            <Nav></Nav>
            <h4>Age Select today’s exercise</h4>
            <div className='row ms-0'>
                <div className="left__side col-md-8 row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-0">

                    {
                        gymdatas.map(data => <SingleData
                            data={data}
                            key={data._id}
                        ></SingleData>)
                    }
                </div>
                <div className="right__side col-md-4 bg-white ms-0 ms-md-4">
                    <RightContainer></RightContainer>
                </div>
            </div>
        </div>
    );
};

export default Home;
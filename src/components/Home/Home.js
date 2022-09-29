import React, { useEffect, useState } from 'react';
import RightContainer from '../RightContainer/RightContainer';
import Nav from '../Nav/Nav';
import './Home.css'
import Questions from '../Questions/Questions';
import Footer from '../Footer/Footer';
import Datas from '../Datas/Datas';


const Home = () => {
    const [gymdatas, setGymdata] = useState([])
    const [seconds, setSeconds] = useState([])

    useEffect(() => {

        fetch('gymsData.json')
            .then(res => res.json())
            .then(data => setGymdata(data))

    }, [])


    const [addBreak, setAddBreak] = useState([])

    useEffect(() => {
        const storeData = JSON.parse(localStorage.getItem("addTime"))
        setAddBreak(storeData)
    }, [])


    return (
        <div className='home__container'>
            <Nav></Nav>
            <h4>Age Select today’s exercise</h4>
            <div className='row ms-0'>
                <div className="left__side col-md-8 mt-0">
                    <Datas
                        gymdatas={gymdatas}
                        seconds={seconds}
                        setSeconds={setSeconds}
                    ></Datas>
                </div>
                <div className="right__side col-md-4 bg-white p-3 rounded">
                    <RightContainer seconds={seconds} setAddBreak={setAddBreak} addBreak={addBreak}></RightContainer>
                </div>
            </div>
            <div className='mt-4'>
                <Questions></Questions>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
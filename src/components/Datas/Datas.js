import React from 'react';
import './Datas.css'
import SingleData from '../SingleData/SingleData';

const Datas = ({ gymdatas, seconds, setSeconds }) => {
    return (
        <div className='datas row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4'>
            {
                gymdatas.map(data =>
                    <SingleData
                        data={data}
                        key={data.id}
                        seconds={seconds}
                        setSeconds={setSeconds}
                    ></SingleData>)
            }

        </div>
    );
};

export default Datas;
import React from 'react';
import './Datas.css'
import SingleData from '../SingleData/SingleData';

const Datas = ({ gymdatas, handleAddSecond }) => {
    return (
        <div className='datas row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4'>
            {
                gymdatas.map(data =>
                    <SingleData
                        data={data}
                        key={data._id}
                        handleAddSecond={handleAddSecond}
                    ></SingleData>)
            }

        </div>
    );
};

export default Datas;
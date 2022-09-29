import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MainContext from '../../../context/MainContext';

const Appointmentdetails = () => {
    const { id } = useParams();
    const context = useContext(MainContext);
    const [data, setData] = useState({});

    useEffect(() => {
        // console.log(id);
        getData(id);
    });

    const getData = async (id) => {
        const ans = await context.getAppointment(id);
        console.log(ans);
        setData(ans.data[0]);
    };

    return (
        <>
            {Object.keys(data).length > 0 ? <>
                <div>
                    <h1>{data.patient_name}</h1>
                </div>
                <div>
                    {id}
                </div>
                <div>{data.date} - {data.time}</div>
                <div>
                    <h3>{data.doctor_name}</h3>
                </div>
                {/* <div>
                    Full description
                </div> */}
            </> : 'Loading ...'}
        </>
    )
}

export default Appointmentdetails;

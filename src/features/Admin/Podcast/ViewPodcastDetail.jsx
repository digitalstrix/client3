import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.css';
import MainContext from '../../../context/MainContext';

const Viewpodcastdetail = () => {
    const { id } = useParams();
    const context = useContext(MainContext);
    const [data, setData] = useState({});
    useEffect(() => {
        // console.log(id);
        getPodcast(id);
    },[]);

    const getPodcast = async (id) => {
        const ans = await context.getPodcast(id);
        console.log(ans);
        setData(ans.data[0]);
    };


    return (
        <>
            {Object.keys(data).length>0 ? <div className="blog-main">
                <video width="400" controls>
                    <source src={`https://immunify-backend.herokuapp.com/${data.path}`} type="video/mp4" />
                </video>
                <div className="category">
                    {data.User.username} | {new Date(data.updatedAt).toLocaleDateString()}
                </div>
                <div className="title">
                    <h1>{data.name}</h1>
                </div>
                <div className="content">
                    <p>{data.content}</p>
                </div>
            </div> : "Loading ..."}
        </>
    )
}

export default Viewpodcastdetail;

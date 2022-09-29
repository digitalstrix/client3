import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.css';
import MainContext from '../../../context/MainContext';

const Viewblogdetail = () => {
    const { id } = useParams();
    const context = useContext(MainContext);
    const [data, setData] = useState({});
    useEffect(() => {
        // console.log(id);
        getData(id);
    },[]);

    const getData = async (id) => {
        const ans = await context.getPost(id);
        console.log(ans);
        setData(ans.data[0]);
    };

    return (
        <>
            {Object.keys(data).length>0 ? <div className="blog-main">
                <div className="image">
                    <img style={{height:"400px", width:"400px", objectFit: "cover"}} src={`https://immunify-backend.herokuapp.com/${data.file_link}`} alt="" />
                </div>
                <div className="category">
                    {data.PostCategory.name!=='' ? data.PostCategory.name : " - "} | {new Date(data.updatedAt).toLocaleDateString()}
                </div>
                <div className="title">
                    <h1>{data.title}</h1>
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{__html: data.content}}></p>
                </div>
            </div> : "Loading ..."}

        </>
    )
}

export default Viewblogdetail;

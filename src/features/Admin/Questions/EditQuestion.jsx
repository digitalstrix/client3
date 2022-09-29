import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@material-ui/core';
import MainContext from '../../../context/MainContext';
import { useParams } from 'react-router-dom';

const Editquestion = (props) => {
    const [value1, setValue1] = useState({
        question: "",
        featuredImage: ""
    });
    const context = useContext(MainContext);
    const { id } = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const ans = await context.getQuestion(id);
        console.log(ans.data[0]);
        setValue1({
            question: ans.data[0].question,
            featuredImage: ""
        });
    };

    const handleChange = (e) => {
        setValue1({ ...value1, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value1);
        console.log(id);
        let ans = await context.updateQuestion({ id, question: value1.question });
        console.log(ans);
        if (ans.status) {
            props.showAlert(true);
        }
        else {
            props.showAlert(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                    <h1>Edit Question</h1>
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <h3>Question</h3>
                    <TextField id="question" label="Question" sx={{ width: "100%" }} name="question" onChange={handleChange} value={value1.question} variant="outlined" multiline rows={4} />
                </div>
                {/* <div style={{ marginBottom: "12px" }}>
                    <h3>Upload Featured Image</h3>
                    <input type="file" name="featuredImage" onChange={handleChange} id="featuredImage" />
                </div> */}
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </form>
        </>
    )
}

export default Editquestion;

import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@material-ui/core';
import { MultiSelect } from "react-multi-select-component";
import MainContext from '../../../context/MainContext';

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    ['link', 'image'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'align': [] }],

    ['clean']
];

const options = [];

const Createpodcast = (props) => {
    const [value1, setValue1] = useState({
        title: "",
        slug: "",
        video: "",
        status: "",
        featuredImage:""
    });
    const [value, setValue] = useState({
        richText: '',
        simpleText: '',
        textLength: 0
    });
    const [selected, setSelected] = useState([]);
    const context = useContext(MainContext);
    
    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        const ans=await context.getCategory();
        for(let i of ans.data)
        {
            options.push({
                label:i.name,
                value:i.id
            });
        }
    };

    const rteChange1 = (content, delta, source, editor) => {
        setValue({
            richText: editor.getHTML(),
            simpleText: editor.getText(),
            textLength: editor.getLength()
        })
    };

    const handleChange = (e) => {
        if (e.target.name === "video" || e.target.name==="featuredImage") {
            setValue1({ ...value1, [e.target.name]: e.target.files[0] });
        }
        else {
            setValue1({ ...value1, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value1);
        console.log(value);
        console.log(options);
        let str = "";

        for (let i of selected) {
            str += i.value + ",";
        }

        console.log(str.slice(0, -1));

        let ans = await context.createPodcast({ podcast: value1.video, name: value1.title, UserId: "1", slug: value1.slug, content: value.richText, PodcastCategoryId: str.slice(0, -1), featuredImage:value1.featuredImage });
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
                    <h1>Create Podcast</h1>
                </div>

                <div>
                    <h3>Title</h3>
                    <TextField id="title" label="Title" sx={{ width: "100%" }} name="title" onChange={handleChange} value={value1.title} variant="outlined" />
                </div>
                <div>
                    <h3>URL Slug</h3>
                    <TextField id="slug" label="Slug" sx={{ width: "100%" }} name="slug" onChange={handleChange} value={value1.slug} variant="outlined" />
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <h3>Select Categories</h3>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <h3>Write Description</h3>
                    <ReactQuill theme="snow" value={value.richText} placeholder="Write here .." onChange={rteChange1} modules={{ toolbar: toolbarOptions }} />
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <h3>Select Status</h3>
                    <FormControl fullWidth>
                        <InputLabel id="status1">Status</InputLabel>
                        <Select
                            labelId="status1"
                            id="status"
                            label="Status"
                            name="status" onChange={handleChange} value={value1.status}
                        >
                            <MenuItem value={'draft'}>Draft</MenuItem>
                            <MenuItem value={'published'}>Published</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <h3>Upload File</h3>
                    <input type="file" name="video" onChange={handleChange} id="video" />
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <h3>Upload Featured Image</h3>
                    <input type="file" name="featuredImage" onChange={handleChange} id="featuredImage" />
                </div>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </form>
        </>
    );
}

export default Createpodcast;

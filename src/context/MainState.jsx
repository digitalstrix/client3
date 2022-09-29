import React from 'react'
import MainContext from './MainContext'

// const baseUrl = 'http://localhost:5000';
const baseUrl = 'https://immunify-backend.herokuapp.com';

const Mainstate = (props) => {
    // const getPodcast = async (id = '', name = '', UserId = '', author = '') => {
    const getPodcast = async (id = '') => {
        try {
            // const response = await fetch(`${baseUrl}/podcast/get?id=${id}&name=${name}&UserId=${UserId}&author=${author}`, {
            let url;
            if (id !== '') {
                url = `${baseUrl}/podcast/get?id=${id}`;
            }
            else {
                url = `${baseUrl}/podcast/get`;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createPodcast = async (data1) => {
        try {
            // console.log(data1);
            var formdata = new FormData();
            formdata.append("podcast", data1.podcast);
            formdata.append("name", data1.name);
            formdata.append("UserId", data1.UserId);
            formdata.append("slug", data1.slug);
            formdata.append("content", data1.content);
            formdata.append("PodcastCategoryId", data1.PodcastCategoryId);
            formdata.append("featuredImage", data1.featuredImage);

            const response = await fetch(`${baseUrl}/podcast/upload`, {
                method: "POST",
                redirect: 'follow',
                body: formdata
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updatePodcast = async (data1) => {
        try {
            var formdata = new FormData();
            formdata.append("name", data1.name);
            formdata.append("status", data1.status);
            formdata.append("podcast", data1.podcast);
            formdata.append("slug", data1.slug);
            formdata.append("content", data1.content);
            formdata.append("PodcastCategoryId", data1.PodcastCategoryId);

            const response = await fetch(`${baseUrl}/podcast/update?id=${data1.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formdata
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deletePodcast = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/podcast/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // const getPost = async (id = '', title = '', type = '', slug = '', categories = '') => {
    const getPost = async (id = '') => {
        try {
            // const response = await fetch(`${baseUrl}/blog/get?id=${id}&title=${title}&type=${type}&slug=${slug}?categories=${categories}`, {
            let url;
            console.log(id);
            if (id !== '') {
                url = `${baseUrl}/blog/get?id=${id}`;
            }
            else {
                url = `${baseUrl}/blog/get`;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createPost = async (data1) => {
        console.log(data1);
        try {
            const formdata = new FormData();
            formdata.append("title", data1.title);
            formdata.append("slug", data1.slug);
            formdata.append("content", data1.content);
            formdata.append("post", data1.file);
            formdata.append("UserId", data1.created_by_user);
            formdata.append("PostCategoryId", data1.categories);
            formdata.append("type", data1.type);
            formdata.append("featuredImage", data1.file_link);

            const response = await fetch(`${baseUrl}/blog/create`, {
                method: "POST",
                redirect: 'follow',
                body: formdata
            });
            const data = await response.json();
            console.log(data);
            // var requestOptions = {
            //     method: 'POST',
            //     body: formdata,
            //     redirect: 'follow'
            //   };
              
            //   fetch(`${baseUrl}/blog/create`, requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updatePost = async (data1) => {
        try {
            const formdata = new FormData();
            formdata.append("title", data1.title);
            formdata.append("slug", data1.slug);
            formdata.append("content", data1.content);
            formdata.append("post", data1.file);
            formdata.append("UserId", data1.created_by_user);
            formdata.append("PostCategoryId", data1.categories);
            formdata.append("type", data1.type);

            const response = await fetch(`${baseUrl}/blog/update?id=${data1.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formdata
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deletePost = async (id, user) => {
        try {
            const response = await fetch(`${baseUrl}/blog/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
                body: JSON.stringify({ user })
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // const getWhitenoise = async (id = '', name = '', UserId = '', author = '') => {
    const getWhitenoise = async (id = '') => {
        try {
            // const response = await fetch(`${baseUrl}/whitenoise/get?id=${id}&name=${name}&UserId=${UserId}&author=${author}`, {
            let url;
            if (id !== '') {
                url = `${baseUrl}/whitenoise/get?id=${id}`;
            }
            else {
                url = `${baseUrl}/whitenoise/get`;
            }
            console.log(url);

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createWhitenoise = async (data) => {
        try {
            const formData = new FormData();
            formData.append("whitenoise", data.whitenoise);
            formData.append("name", data.name);
            formData.append("UserId", data.UserId);
            formData.append("status", data.status);
            formData.append("featuredImage", data.featuredImage);

            const response = await fetch(`${baseUrl}/whitenoise/upload`, {
                method: "POST",
                redirect: 'follow',
                body: formData
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const updateWhitenoise = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("status", data.status);
            formData.append("whitenoise", data.whitenoise);

            const response = await fetch(`${baseUrl}/whitenoise/update?id=${data.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formData
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteWhitenoise = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/whitenoise/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // const getMusic = async (id = '', name = '', UserId = '', author = '') => {
    const getMusic = async (id = '') => {
        try {
            // const response = await fetch(`${baseUrl}/music/get?id=${id}&name=${name}&UserId=${UserId}&author=${author}`, {
            let url;
            if (id !== '') {
                url = `${baseUrl}/music/get?id=${id}`;
            }
            else {
                url = `${baseUrl}/music/get`;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createMusic = async (data) => {
        try {
            const formData = new FormData();
            formData.append("music", data.music);
            formData.append("name", data.name);
            formData.append("UserId", data.UserId);
            formData.append("status", data.status);
            formData.append("featuredImage", data.featuredImage);

            const response = await fetch(`${baseUrl}/music/upload`, {
                method: "POST",
                redirect: 'follow',
                body: formData
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const updateMusic = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("status", data.status);
            formData.append("music", data.music);

            const response = await fetch(`${baseUrl}/music/update?id=${data.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formData
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteMusic = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/music/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // const getQuestion = async (id = '', question = '', status = '', author = '') => {
    const getQuestion = async (id = '') => {
        try {
            // const response = await fetch(`${baseUrl}/question/get?id=${id}&question=${question}&status=${status}&author=${author}`, {
            let url;
            if (id !== '') {
                url = `${baseUrl}/question/get?id=${id}`;
            }
            else {
                url = `${baseUrl}/question/get`;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createQuestion = async (data) => {
        try {
            const response = await fetch(`${baseUrl}/question/create`, {
                method: "POST",
                redirect: 'follow',
                body: JSON.stringify(data)
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const updateQuestion = async (data) => {
        try {
            // console.log(data);
            var formdata = new FormData();
            formdata.append("question",data.question);
            const response = await fetch(`${baseUrl}/question/update?id=${data.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formdata
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteQuestion = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/question/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // const getAnswer = async (id = '', QuestionId = '', status = '', author = '') => {
    const getAnswer = async () => {
        try {
            // const response = await fetch(`${baseUrl}/answer/get?id=${id}&QuestionId=${QuestionId}&status=${status}&author=${author}`, {
            const response = await fetch(`${baseUrl}/answer/get`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createAnswer = async (data) => {
        try {
            const formData = new FormData();
            formData.append("QuestionId", data.QuestionId);
            formData.append("UserId", data.UserId);
            formData.append("answer", data.answer);

            const response = await fetch(`${baseUrl}/answer/create`, {
                method: "POST",
                redirect: 'follow',
                body: formData
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const updateAnswer = async (data) => {
        try {
            const formData = new FormData();
            formData.append("answer", data.answer);
            formData.append("status", data.status);

            const response = await fetch(`${baseUrl}/answer/update?id=${data.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formData
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteAnswer = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/answer/delete/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // const getCategory = async (id = '', type = '', status = '', name = '', parent_id = '') => {
    const getCategory = async () => {
        try {
            // const response = await fetch(`${baseUrl}/category/get?id=${id}&type=${type}&status=${status}&name=${name}&parent_id=${parent_id}`, {
            const response = await fetch(`${baseUrl}/category/get`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createCategory = async (data) => {
        try {
            // console.log(data);
            var formdata = new FormData();
            formdata.append("name",data.name);
            formdata.append("description",data.description);
            formdata.append("type",data.type);
            formdata.append("created_by_user",data.created_by_user);
            const response = await fetch(`${baseUrl}/category/create`, {
                method: "POST",
                redirect: 'follow',
                body: formdata
            });
            const data1 = await response.json();
            console.log(data1);
            return data1;
        } catch (error) {
            console.log(error);
        }
    };

    const updateCategory = async (data1) => {
        try {
            var formdata = new FormData();
            formdata.append("name",data1.name);
            formdata.append("description",data1.description);
            formdata.append("status",data1.status);
            const response = await fetch(`${baseUrl}/category/update?id=${data1.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: formdata
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCategory = async (id, user) => {
        try {
            const response = await fetch(`${baseUrl}/category/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
                body: JSON.stringify({ user })
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const getAppointment = async () => {
        try {
            // const response = await fetch(`${baseUrl}/appointment/get?id=${id}&start=${start}&end=${end}&status=${status}&author=${author}`, {
            const response = await fetch(`${baseUrl}/appointment/get`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const createAppointment = async (data1) => {
        try {
            var formdata = new FormData();
            formdata.append("date",data1.date);
            formdata.append("time",data1.time);
            formdata.append("patient_name",data1.patient_name);
            formdata.append("doctor_name",data1.doctor_name);
            formdata.append("UserId",data1.UserId);
            const response = await fetch(`${baseUrl}/appointment/create`, {
                method: "POST",
                redirect: 'follow',
                body: formdata
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateAppointment = async (data1) => {
        try {
            const response = await fetch(`${baseUrl}/appointment/update?id=${data1.id}`, {
                method: "PATCH",
                redirect: 'follow',
                body: JSON.stringify(data1)
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteAppointment = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/appointment/delete/${id}`, {
                method: "DELETE",
                redirect: 'follow',
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <MainContext.Provider value={{ getPodcast, createPodcast, updatePodcast, deletePodcast, getPost, createPost, updatePost, deletePost, getWhitenoise, createWhitenoise, updateWhitenoise, deleteWhitenoise, getMusic, createMusic, updateMusic, deleteMusic, getQuestion, createQuestion, updateQuestion, deleteQuestion, getAnswer, createAnswer, updateAnswer, deleteAnswer, getCategory, createCategory, updateCategory, deleteCategory, getAppointment, createAppointment, updateAppointment, deleteAppointment }}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}

export default Mainstate;

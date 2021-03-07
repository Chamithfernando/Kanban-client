import axios from "axios";
import {GET_ERRORS,GET_PROJECT,GET_PROJECTS} from "./types";


//Manage Post request from springboot server
export const createProject = (project, history) => async dispatch => {

    try {
        await axios.post ("http://localhost:8080/api/project",project);
        history.push("/dashboard");

    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        });

    }

};

//Manage get request from springboot server
export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

{
    //below 3
}

export const getProject = (id, history) =>async dispatch =>{

    const res = await axios.get(`http://localhost:8080/api/project/get/${id}`)
    dispatch({
        type : GET_PROJECT,
        payload : res.data
    })
}
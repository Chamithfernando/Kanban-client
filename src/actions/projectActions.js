import axios from "axios";
import {GET_ERRORS,GET_PROJECT,GET_PROJECTS,DELETE_PROJECT} from "./types";


//Manage Post request from springboot server
export const createProject = (project, history) => async dispatch => {

    try {
        await axios.post ("http://localhost:8080/api/project",project);
        history.push("/dashboard");

        //This did not display error maessage after updating another value in the same field
        //Placing all the errors are null on this step.
        dispatch({
            type: GET_ERRORS,
            payload:{}
        });

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

export const getProject = (id, history) => async dispatch =>{

    try {
        

    const res = await axios.get(`/api/project/get/${id}`);
    dispatch({
        type : GET_PROJECT,
        payload : res.data
    });

    } catch (error) {
        history.push("/dashboard");
    }
};

export  const deleteProject = id => async dispatch => {

    if (window.confirm("Are you Sure? this will delete the project and all the data related to it"
    
    )
 ) {

    await axios.delete(`/api/project/delete/${id}`);
    dispatch({
        type : DELETE_PROJECT,
        payload: id
    })
        
    }

    

}
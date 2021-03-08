import {GET_PROJECT, GET_PROJECTS,DELETE_PROJECT} from "../actions/types";

const initialState = {
    projects :[],
    project:{}

};

export default function(state = initialState,action){

    switch (action.type){


      case GET_PROJECTS:
        return {
            ...state,
            projects:action.payload
        };

        //2
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload

            };

        //2
        case DELETE_PROJECT:
            return {

                ...state,
                projects: state.projects.filter(
                        
                    project => project.projectIdentifier !== action.payload
                    
                    )

            };

        default:
            return state;
    }

}
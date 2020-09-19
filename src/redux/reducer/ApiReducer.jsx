import { API_CALL, NO_API_CALL } from "../action/ApiCall";

const initialState = {
    apiName:''
}

const ApiReducer = (state = initialState, action) => {
    
    switch(action.type) {
       
        case API_CALL:
            return {
                ...state,
                apiName: action.payload
            }

        case NO_API_CALL:
            return {
                ...state,
                apiName: action.payload
            }

        default: return state;
    }
};

export default ApiReducer
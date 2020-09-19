export const API_CALL = 'API_CALL';
export const NO_API_CALL = 'NO_API_CALL';

export const callApi = (name) => {
    return {
        type: API_CALL,
        payload:name
    }
}

export const noCallApi = (name) => {
    return {
        type: NO_API_CALL,
        payload:name
    }
}
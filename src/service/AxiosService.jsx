import axios from "axios";

export default function axiosService(){
}

axiosService.prototype.get = function get(URL,isHeaderReq = false ,header) {
    return axios.get(URL, isHeaderReq && header);
}

axiosService.prototype.post = function post(URL, data, isHeaderReq = false ,header) {
    return axios.post(URL, data, isHeaderReq && header)
}
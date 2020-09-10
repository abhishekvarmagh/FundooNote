import Axios from "axios";
import URL from '../config/url'

function post(url, data) {
    return Axios({
        method: 'post',
        url: `${URL.apiURL}${url}`,
        data: data,
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export {post}
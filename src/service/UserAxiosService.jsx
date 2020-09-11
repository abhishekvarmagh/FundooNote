import { post } from './AxiosService';

class UserAxiosService {

    registeration(data) {
        return (post("user/userSignUp", data))
    }

    login(data) {
        return (post("user/login", data))
    }

    forgotPassword(data) {
        return (post("user/reset", data))
    }

    resetPassword(data, token) {
        return (post(`user/reset-password?access_token=${token}`, data))
    }
}

export default UserAxiosServiceimport axiosservice from './AxiosService'; 
import URL from '../config/url';

class UserAxiosService {

    constructor() {
        this.axiosservice = new axiosservice();
    }

    registeration(data) {
		return this.axiosservice.post(URL.apiURL+"user/userSignUp", data, false);
    }

    login(data) {
        return this.axiosservice.post(URL.apiURL+"user/login", data, false);
    }

    forgotPassword(data) {
        return this.axiosservice.post(URL.apiURL+"user/reset", data, false);
    }

    resetPassword(data, token) {
        return this.axiosservice.post(URL.apiURL+`user/reset-password?access_token=${token}`, data, false);
    }
}

export default new UserAxiosService();
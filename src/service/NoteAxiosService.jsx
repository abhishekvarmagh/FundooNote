import axiosservice from './AxiosService'; 
import URL from '../config/url';

 class NoteService {

    constructor() {
        this.axiosservice = new axiosservice();
    }

    addNote(data) {
        console.log(data)
        return this.axiosservice.post(URL.apiURL+'notes/addNotes', data, true, this.getHeader());
    }

    getNotes() {
        return this.axiosservice.get(URL.apiURL+'notes/getNotesList', true, this.getHeader());
    }

    getHeader = () => {
        return {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
          }
        }
    }

 }

 export default new NoteService();
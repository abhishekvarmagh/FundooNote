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

    updateNote(data) {
        return this.axiosservice.post(URL.apiURL+'notes/updateNotes', data, true, this.getHeader());
    }

    changesColorNotes(data) {
        return this.axiosservice.post(URL.apiURL+'notes/changesColorNotes', data, true, this.getHeader());
    }

    deleted(data) {
        return this.axiosservice.post(URL.apiURL+'notes/trashNotes', data, true, this.getHeader());
    }

    getTrashNoteList() {
        return this.axiosservice.get(URL.apiURL+'notes/getTrashNotesList', true, this.getHeader());
    }

    deleteForeverNotes(data) {
        return this.axiosservice.post(URL.apiURL+'notes/deleteForeverNotes', data, true, this.getHeader());
    }

    getArchiveNoteList() {
        return this.axiosservice.get(URL.apiURL+'notes/getArchiveNotesList', true, this.getHeader());
    }

    archiveNotes(data) {
        return this.axiosservice.post(URL.apiURL+'notes/archiveNotes', data, true, this.getHeader());
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
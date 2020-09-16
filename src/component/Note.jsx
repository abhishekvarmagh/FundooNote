import React from 'react';
import DisplayNote from './DisplayNote';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddNote from "./AddNote";
import NoteAxiosService from '../service/NoteAxiosService';
import '../scss/note.scss';
import {connect} from "react-redux";
import {noCallApi} from "../redux/action/ApiCall"

class Note extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            notesDetails: []
        }
    }

    getNotes = () => {
        NoteAxiosService.getNotes().then((response) => {
            this.setState({notesDetails: response.data.data.data.filter((note) => note.isDeleted === false && note.isArchived === false)})
        })
    }

    componentDidMount(){
        this.getNotes();
    }

    render(){
        return(
            <div className="items-container">
                <div className="notes-container">
                    <AddNote />
                </div>
                { this.state.notesDetails.length == 0 ? 
                    <div className="note-list">
                        <div className="add-note-here">
                            <EmojiObjectsOutlinedIcon style={{width:'100%',height:'100%'}} color="disabled" />
                        </div>
                        <div className="note-text">Notes you add appear here</div>
                    </div>
                    :
                    <DisplayNote noteDetails={this.state.notesDetails} />
                }
            </div>
        )
    }
}

export default Note; 
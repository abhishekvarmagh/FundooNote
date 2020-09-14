import React from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddNote from "./AddNote";
import '../scss/note.scss';

class Note extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            notesDetails: []
        }
    }

    render(){
        return(
                <div className="items-container">
                    <div className="notes-container">
                        <AddNote />
                    </div> 
                        <div className="note-list">
                            <div className="add-note-here">
                                <EmojiObjectsOutlinedIcon style={{width:'100%',height:'100%'}} color="disabled" />
                            </div>
                            <div className="note-text">Notes you add appear here</div>
                        </div>
                </div>
        )
    }
}

export default Note; 
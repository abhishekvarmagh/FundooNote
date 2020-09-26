import React from 'react';
import '../scss/binIcon.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import IconButton from '@material-ui/core/IconButton';
import NoteAxiosService from '../service/NoteAxiosService';
import { callApi } from '../redux/action/ApiCall';
import {connect} from 'react-redux'

class BinIcon extends React.Component {

    handleRestore = () => {
        const data = {
            isDeleted: false,
            noteIdList: [this.props.noteId]
        }
        NoteAxiosService.deleted(data).then((response) => {
            this.props.call("NOTES")
        })
    }

    handleDeleteForever = () => {
        const data = {
            noteIdList: [this.props.noteId]
        }
        NoteAxiosService.deleteForeverNotes(data).then((response) => {
            console.log(response)
            this.props.call("NOTES")
        })
    }

    render() {
        return(
            <div className="bin-icon-container">
                <IconButton size="small" onClick={this.handleDeleteForever}><DeleteForeverIcon fontSize="inherit" color="action" /></IconButton>
                <IconButton size="small" onClick={this.handleRestore}><RestoreFromTrashIcon fontSize="inherit" color="action" /></IconButton>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        call: (apiName)=> dispatch(callApi(apiName))
    }
}

export default connect(null,mapDispatchToProps)(BinIcon);
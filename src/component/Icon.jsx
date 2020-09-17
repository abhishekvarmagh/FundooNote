import React from 'react';
import '../scss/icon.scss';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import NoteAxiosService from '../service/NoteAxiosService';
import { callApi } from '../redux/action/ApiCall';
import {connect} from 'react-redux'

class Icon extends React.Component {

    constructor(){
        super();
        this.state = {
            isVisible: false,
            isMenuVisible: false,
            color: ['#fff','#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#d7aefb','#fdcfe8','#e6c9a8','#e8eaed']
        }
    }

    handleClick = () => {
        this.setState({isVisible: !this.state.isVisible})
    }

    handleMenu = () => {
        this.setState({isMenuVisible: !this.state.isMenuVisible})
        const data = {
            isDeleted: true,
            noteIdList: [this.props.noteId]
        }
        NoteAxiosService.deleted(data).then((response) => {
            this.props.call("NOTES")
        })
    }

    handleArchive = () => {
        const data = {
            isArchived: true,
            noteIdList: [this.props.noteId]
        }
        NoteAxiosService.archiveNotes(data).then((response) => {
            console.log(response)
            this.props.call("NOTES")
        })
    }

    handleUnarchive = () => {
        const data = {
            isArchived: false,
            noteIdList: [this.props.noteId]
        }
        NoteAxiosService.archiveNotes(data).then((response) => {
            this.props.call("NOTES")
        })
    }

    handleColor = (color) => {
        if(this.props.noteId === undefined)
        {
            alert('true')
            this.props.setColor(color);
            this.setState({isVisible: false})
        }
        else 
        {
            alert('false')
            this.props.setColor(color, this.props.noteId);
            this.setState({isVisible: false})
        }
        
    }

    render(){
        const url = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
        return(
            <div className="icons-container">
                <div className="color-container" style={ this.state.isVisible ? {visibility:'visible'} : {visibility:'hidden'} }>
                    {this.state.color.map((color,index) => <div className="color-picker" onClick={() => this.handleColor(color)} style={{backgroundColor:color}}></div>)}
                </div> 
                <div className="more-container" style={ this.state.isMenuVisible ? {visibility: 'visible'} : {visibility: 'hidden'} }>
                    <div className="more-options">
                        <button className="menu-button">Delete Note</button>
                    </div>
                </div>
                <IconButton size="small"><AddAlertOutlinedIcon fontSize="inherit" color="action" /></IconButton>
                <IconButton size="small"><PersonAddOutlinedIcon fontSize="inherit" color="action" /></IconButton>
                <IconButton size="small"><ColorLensOutlinedIcon color="action" onClick={this.handleClick} fontSize="inherit" /></IconButton>
                <IconButton size="small"><ImageOutlinedIcon fontSize="inherit" color="action" /></IconButton>
                <IconButton size="small">{url !== "archive" ? <ArchiveOutlinedIcon fontSize="inherit" color="action" onClick={this.handleArchive} /> : <UnarchiveOutlinedIcon fontSize="inherit" color="action" onClick={this.handleUnarchive} />}</IconButton>
                <IconButton size="small"><MoreVertOutlinedIcon fontSize="inherit" color="action" onClick={this.handleMenu} /></IconButton>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        call: (apiName)=> dispatch(callApi(apiName))
    }
}

export default connect(null,mapDispatchToProps)(Icon);
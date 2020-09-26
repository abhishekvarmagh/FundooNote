import React from 'react';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import NoteAxiosService from '../service/NoteAxiosService';
import DisplayNote from './DisplayNote';
import {connect} from "react-redux";
import {noCallApi} from "../redux/action/ApiCall"

class Bin extends React.Component {

    constructor(){
        super();
        this.state = {
            archiveNotesList: []
        }
    }

    getArchiveList = () => {
        NoteAxiosService.getArchiveNoteList().then((response) => {
            console.log(response)
            this.setState({archiveNotesList: response.data.data.data})
        })
        this.props.call("")
    }

    componentDidMount(){
        this.getArchiveList();
    }

    render(){
        if (this.props.apiName === "NOTES"){
            this.getArchiveList();
        }
        return(
            <div className="items-container">
                { this.state.archiveNotesList.length !== 0 ? 
                    <DisplayNote noteDetails={this.state.archiveNotesList} />
                    :
                    <div className="note-list">
                        <div className="add-note-here">
                            <ArchiveOutlinedIcon style={{width:'100%',height:'100%'}} color="disabled" />
                        </div>
                        <div className="note-text">Your archived notes appear here</div>
                    </div>
                }
            </div>
        )
    }
}

const mapToStateProps = state => {
    return {
        apiName: state.api.apiName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        call: (apiName)=> dispatch(noCallApi(apiName))
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Bin)
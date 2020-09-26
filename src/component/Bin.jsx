import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import NoteAxiosService from '../service/NoteAxiosService';
import DisplayNote from './DisplayNote';
import {connect} from "react-redux";
import {noCallApi} from "../redux/action/ApiCall"

class Bin extends React.Component {

    constructor(){
        super();
        this.state = {
            trashNotesList: []
        }
    }

    getTrashList = () => {
        NoteAxiosService.getTrashNoteList().then((response) => {
            console.log(response)
            this.setState({trashNotesList: response.data.data.data})
        })
        this.props.call("")
    }

    componentDidMount(){
        this.getTrashList();
    }

    render(){
        if (this.props.apiName === "NOTES"){
            this.getTrashList();
        }
        return(
            <div className="items-container">
                { this.state.trashNotesList.length !== 0 ? 
                    <DisplayNote noteDetails={this.state.trashNotesList} />
                    :
                    <div className="note-list">
                        <div className="add-note-here">
                            <DeleteOutlineIcon style={{width:'100%',height:'100%'}} color="disabled" />
                        </div>
                        <div className="note-text">No Notes In Recycle Bin</div>
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
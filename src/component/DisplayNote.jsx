import React from 'react';
import '../scss/displayNote.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Icon from './Icon';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import NoteAxiosService from '../service/NoteAxiosService';
import { callApi } from '../redux/action/ApiCall';
import {connect} from 'react-redux';
import BinIcon from './BinIcon'
import Masonry from 'react-masonry-css'

const styles = theme =>({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent"
      }
  },
  'input': {
    '&::placeholder': {
      fontWeight: 'bold',
      fontSize: '15px'
    }
  }
});

class NoteCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            isDialogVisible: false,
            index: '',
            id: '',
            title: '',
            description: '',
            color: 'white',
            noteDetails: []
        }
    }

    handleVisible = (index) => {
        this.setState({index: index})
    }

    handleClose = () => {
        const data = {
            noteId: this.state.id,
            title: this.state.title,
            description: this.state.description
        }
        NoteAxiosService.updateNote(data).then((response) => {
            console.log(response)
            // this.props.updateNote()
            this.props.call("NOTES")
        })
        this.setState({isDialogVisible: false});
    }

    handleDialog = () => {
        this.setState({isDialogVisible: true})
    }

    handleUpdate = (id, title, description) => {
        // this.setState({noteDetails: this.props.noteDetails.filter((noteDetails) => noteDetails.id == id)})
        this.setState({isDialogVisible: true , id: id,title: title, description: description})
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    setColor = (color, id) => {
        this.setState({color: color})
        const data = {
            color: color,
            noteIdList: [id]
        }
        NoteAxiosService.changesColorNotes(data).then((response) => {
            console.log()
            this.props.call("NOTES")
        })
    }

    render(){
        const { classes } = this.props;
        const url = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
        const breakpointColumnsObj = {
            default: 4,
            1125: 3,
            954: 3,
            700: 2,
            500: 1
          };
        return(
            <div class="flex-container">
                <Masonry breakpointCols={breakpointColumnsObj} style={{width:'100%',display:'flex',flexFlow:'wrap'}}>
                {this.props.noteDetails.reverse().map((note, index) => <div key={note.id} className="flex-container-main">
                    <div className="card-container" style={{backgroundColor: note.color}} onMouseOver={() => this.handleVisible(index)} onMouseOut={() => this.handleVisible('')}>
                        { url !== "bin" ? <div className="upper-tick" style={ index === this.state.index ? {visibility: 'visible'} : {visibility: 'hidden'} }><CheckCircleIcon /></div> : ''}
                        <div className="card-title"><div onClick={() => this.handleUpdate(note.id, note.title, note.description, note.color)}>{note.title}</div></div>
                        <div className="card-note"><div onClick={() => this.handleUpdate(note.id, note.title, note.description, note.color)}>{note.description}</div></div>
                        <div className="card-icon-container" style={index === this.state.index ? {visibility: 'visible'} : {visibility: 'hidden'} }><div className="card-icon">{ url !== "bin" ? <Icon setColor={this.setColor} noteId={note.id} /> : <BinIcon noteId={note.id} /> }</div></div>
                    </div>
                </div>)}
                </Masonry>
                <Dialog className="dialog-box" open={this.state.isDialogVisible} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent className="dialog-content">
                        <div className="dialog-container" style={{backgroundColor: this.state.color}}>
                            <div className="title">
                                <TextField id="outlined-basic" className={classes.root} size="small" onChange={this.handleChange} name="title" value={this.state.title} autoComplete="off"  placeholder="Title" fullWidth  variant="outlined"
                                InputProps={{ classes: {input: this.props.classes['input']} }}
                                />
                            </div>
                            <div className="note">
                                <TextField className={classes.root} size="small" autoComplete="off" onChange={this.handleChange} name="description"  value={this.state.description} onClick={this.handleVisible} placeholder="Take a note ..." fullWidth  
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rowsMax={26}
                                    variant="outlined"
                                    InputProps={{ classes: {input: this.props.classes['input']} }}
                                />
                            </div>
                            <div className='editor'>
                                <div className="item-icons">
                                    <div className="items">
                                            <Icon setColor={this.setColor} noteId={this.state.id} />
                                    </div>
                                    <div className="close-container">
                                        <button className="close-button" onClick={this.handleClose}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        call: (apiName)=> dispatch(callApi(apiName))
    }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(NoteCard));
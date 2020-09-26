import React from 'react';
import '../scss/addNote.scss';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import Icon from './Icon';
import NoteAxiosService from '../service/NoteAxiosService'
import { callApi } from '../redux/action/ApiCall';
import {connect} from 'react-redux'

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

class AddNote extends React.Component {

    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            isVisible: false,
            color: 'white'
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleVisible = () => {
        this.setState({isVisible: true})
    }

    handleClose = () => {
        if(this.state.title.trim() === "" && this.state.description.trim() === '')
        {
            this.setState({isVisible: false})
        }
        else {
            let formData = new FormData();
            formData.append('title',this.state.title)
            formData.append('description', this.state.description)
            formData.append('color', this.state.color)
            NoteAxiosService.addNote(formData).then((response) => {
                console.log(response)
                this.setState({title: '', description: '', color: 'white', isVisible: false})
                this.props.call("NOTES")
            })
        }
    }

    setColor = (color) => {
        this.setState({color: color})
    }

    render(){
        const { classes } = this.props;
        return(       
                <div className="take-note" style={{backgroundColor: this.state.color}}>
                    <div className={ this.state.isVisible ? 'title' : 'disable' }>
                        <TextField id="outlined-basic" className={classes.root} size="small" autoComplete="off" onChange={this.handleChange} name="title" value={this.state.title}  placeholder="Title" fullWidth  variant="outlined"
                        InputProps={{ classes: {input: this.props.classes['input']} }}
                        />
                    </div>
                    <div className="note">
                        <TextField className={classes.root} size="small"  name="note" autoComplete="off" onChange={this.handleChange} name="description" value={this.state.description} onClick={this.handleVisible} placeholder="Take a note ..." fullWidth  
                        id="outlined-multiline-flexible"
                            multiline
                            rowsMax={26}
                            variant="outlined"
                        InputProps={{ classes: {input: this.props.classes['input']},
                            endAdornment: (this.state.isVisible ?
                                ""
                                :
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="start">
                                        <CheckBoxOutlinedIcon />
                                    </IconButton>
                                    <IconButton
                                    edge="false">
                                        <BrushOutlinedIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end">
                                        <ImageOutlinedIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        />
                    </div>
                    <div className={ this.state.isVisible ? 'editor' : 'disable' }>
                        <div className="item-icons">
                            <div className="items">
                                    <Icon setColor={this.setColor} />
                            </div>
                            <div className="close-container">
                                <button className="close-button" onClick={this.handleClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        call: (apiName)=> dispatch(callApi(apiName))
    }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(AddNote))
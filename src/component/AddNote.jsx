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
            isVisible: false
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleVisible = () => {
        this.setState({isVisible: true})
    }

    render(){
        const { classes } = this.props;
        return(       
                <div className="take-note">
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
                                <button className="close-button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default withStyles(styles)(AddNote)
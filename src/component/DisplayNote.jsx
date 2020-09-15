import React from 'react';
import '../scss/displayNote.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from "@material-ui/core/styles";

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
            isDialogVisible: false
        }
    }

    handleVisible = (index) => {
        this.setState({index: index})
    }

    handleDialog = () => {
        this.setState({isDialogVisible: true})
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    render(){
        const { classes } = this.props;
        return(
            <div class="flex-container">
                <div className="flex-container-main">
                    <div className="card-container">
                        <div className="upper-tick"><CheckCircleIcon /></div>
                        <div className="card-title"><div>title</div></div>
                        <div className="card-note"><div>description</div></div>
                        <div className="card-icon-container"><div className="card-icon">Icon</div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NoteCard);
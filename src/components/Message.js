
import { makeStyles, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles=makeStyles({
    snack:{
        '& > *':{
            color:'#fff',
            backgroundColor:"#000000"
        }
    }
})
 
 const Message = ({open,toggleSnack}) =>{

     const classes=useStyles();

    const handleClose=()=>{
        toggleSnack(false);
    }

     return(
        <Snackbar className={classes.snack} open={open} autoHideDuration={3000} onClose={handleClose}>
            <MuiAlert severity="info">
                Number of Images should be in between 3 and 200
            </MuiAlert>
        </Snackbar>
     );
 }
export default Message;

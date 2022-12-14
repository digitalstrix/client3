import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const renderDialogOpenningButton = (isiconbtn, tooltip, dialogOpenAction, btnicon, btnlabel, disableOpenAction) => {
  if (isiconbtn === undefined) {
    return null;
  }

  return isiconbtn ? (
    <Tooltip title={tooltip}>
      <IconButton
        onClick={dialogOpenAction}
        disabled={disableOpenAction}
        color="inherit"
      >
        {btnicon}
      </IconButton>
    </Tooltip>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={dialogOpenAction}
      disabled={disableOpenAction}
      startIcon={btnicon}
    >
      {btnlabel}
    </Button>
  )

};
const MainDialog = ({
  btnicon,
  btnlabel,
  dialogtitle,
  dialogcontent,
  dialogaction,
  dialogCloseAction,
  isiconbtn,
  maxWidth,
  tooltip,
  dialogactiontitle = '',
  open = false,
  disableOpenAction = false,
  dialogOpenAction = () => {}
}) => {
  const [fullWidth] = React.useState(true);
  return (
    <div>
      {renderDialogOpenningButton(isiconbtn, tooltip, dialogOpenAction, btnicon, btnlabel, disableOpenAction)}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={dialogCloseAction}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={dialogCloseAction}>
          {dialogtitle}
        </DialogTitle>
        <DialogContent dividers>{dialogcontent}</DialogContent>
        {
          dialogaction ?
          <DialogActions>
            <Button
              autoFocus
              onClick={dialogaction}
              color="primary"
              variant="contained"
            >
              {dialogactiontitle}
            </Button>
          </DialogActions>  
          : null
        }
        
      </Dialog>
    </div>
  );
};

export default MainDialog;

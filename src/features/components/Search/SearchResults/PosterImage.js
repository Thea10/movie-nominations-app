import React, { useState } from "react";
import {
  makeStyles,
  Tooltip,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";

const imageDialogStyle = makeStyles(() => ({
  root: {

    "& .MuiIconButton-root":{
      padding: 0
    },
    " & .MuiAvatar-root": {
      width: "200px",
      height: "200px",
      margin: "auto",
    },
  },

  dialog: {
    "& .MuiPaper-root": {
      backgroundColor: "rgb(10 12 14)",
    },

    "& .MuiIconButton-root": {
      color: "rgb(204 214 253)",
    },
    " & .MuiAvatar-root": {
      width: "300px",
      height: "300px",
      margin: "auto",
    },
  },
}));
const PosterImage = ({ img }) => {
  const dialogStyle = imageDialogStyle();
  const [openImage, setopenImage] = useState(false);

  const openImageDialog = () => {
    setopenImage(true);
  };

  const closeImageDialog = () => {
    setopenImage(false);
  };
  return (
    <div className={dialogStyle.root}>
      <Tooltip title="View Poster">
        <IconButton aria-label="View Poster" onClick={openImageDialog}>
          <Avatar src={img} />
        </IconButton>
      </Tooltip>

      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={openImage}
        onClose={closeImageDialog}
        className={dialogStyle.dialog}
      >
        <DialogTitle>
          <Tooltip title="Close">
            <IconButton aria-label="Close Poster" onClick={closeImageDialog}>
              <CloseOutlined />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent>
          <Avatar src={img} style={{ borderRadius: 0 }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PosterImage;

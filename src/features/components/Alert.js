import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useAlertStyle = makeStyles(() => ({
  root: {
    color: "rgb(232, 244, 253)",
    backgroundColor: "rgb(3, 14, 24)",
    position: "absolute",
    top: "2%",
    right: "2%",
    zIndex: 22,
  },
}));

const ShowAlert = ({text}) => {
  const alertStyle = useAlertStyle();

  if (text){
    return (
      <Alert severity="info" className={alertStyle.root}>
      <AlertTitle>Hey</AlertTitle>
      {text}
    
    </Alert>
    )
  } else return null
};

export default ShowAlert;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShowAlert from "../../Alert";

const BtnStyle = makeStyles(() => ({
  root: {
    border: "1px solid rgb(131,9,152)",
    color: "rgb(131,9,152)",

    "&:hover": {
      background: "rgb(131,9,152)",
      color: "rgb(245 245 245)",
    },
  },
}));

const NominationButton = ({ loadingSearch, nominated, item, action }) => {
  const btnStyle = BtnStyle();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const itemAction = () => {
    if (!item) return;
    setLoading(true);
    setTimeout(() => {
      dispatch(action(item));
      setLoading(false);
      setFeedback("Action Successfull");
    }, 2000);
    setTimeout(() => {
      setFeedback(null)
    }, 8000)
 
  };
  return (
    <div>
      <Button
        className={btnStyle.root}
        variant="outlined"
        size="small"
        disabled={loadingSearch || loading}
        title={nominated ? "Remove Nomination" : "Nominate Movie"}
        onClick={itemAction}
      >
        {nominated ? "Remove" : "Nominate Movie"}
      </Button>

      {loading ? <LinearProgress color="secondary" /> : null}

      {feedback  ? <ShowAlert text={feedback} /> : null}
    </div>
  );
};

export default NominationButton;

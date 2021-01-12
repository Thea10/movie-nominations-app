import React, {  useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchList, getList, removeItem } from "../NominationSlice";
import { ThemeContext } from "../../../Theme/ThemeProvider";
import { Typography } from "@material-ui/core";
import Item from "./NominationItem";
import ShowAlert from "../../Alert";

const List = () => {
  const { bodyTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.nomination.status)
  const listItems = useSelector(getList);


  useEffect(() => {
    if (status === "unset") {
      dispatch(fetchList());
    }
  }, [status, dispatch]);


  return (
    <div className="list" style={{ background: bodyTheme.listBg }}>
      <Typography variant="subtitle1"> Nominations </Typography>

      {listItems.length > 0 ? (
        listItems.map((item, i) => {
          return <Item movie={item} key={i} action={removeItem} />;
        })
      ) : (
        <Typography variant="caption">
          You have not nominated any movies
        </Typography>
      )}

      {listItems.length === 5 ? <ShowAlert text={"You have nominated up to five movies"}  /> : null}
    </div>
  );
};

export default List;

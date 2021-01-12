import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  getSearchText,
  setSearchText,
  setDefaultStatus,
} from "../SearchSlice";
import { ThemeContext } from "../../../Theme/ThemeProvider";
import {
  makeStyles,
  Paper,
  InputBase,
  Button,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: "70%",
    margin: "auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  button: {
    background: "#3c0246",
    color: "rgb(245 245 245)",
  },
}));

const SearchBar = () => {
  const searchBarClass = useStyles();
  const { bodyTheme } = useContext(ThemeContext);
  const searchText = useSelector(getSearchText);
  const [feedbackText, setfeedbackText] = useState(null);
  const dispatch = useDispatch();

  const setDefault = () => {
    setfeedbackText("Enter a search term to search for movies");
    dispatch(setDefaultStatus({ status: "none" }));
    setTimeout(() => {
      setfeedbackText(null);
    }, 4000);
  };
  const handleChange = (event) => {
    if (event.target.value === "") {
      setDefault();
      return;
    }
    dispatch(setSearchText(event.target.value));
    searchMovies(event.target.value);
  };

  const handleBtnClick = () => {
    if (searchText === "") {
      setDefault();
      return;
    }
    searchMovies(searchText);
  };

  const searchMovies = (query) => {
    dispatch(fetchMovies(query));
  };

  return (
    <div className={searchBarClass.root}>
      <Paper
        className={searchBarClass.paper}
        style={{ background: bodyTheme.formBg }}
      >
        <InputBase
          placeholder="Search for a movie"
          inputProps={{ "aria-label": "search for a movie" }}
          className={searchBarClass.input}
          onInput={handleChange}
        />
        <Button
          aria-label="search"
          className={searchBarClass.button}
          onClick={handleBtnClick}
        >
          <SearchIcon />
        </Button>
      </Paper>

      {feedbackText ? (
        <Typography style={{ color: bodyTheme.togglerColor }} variant="caption">
          {feedbackText}
        </Typography>
      ) : null}
    </div>
  );
};

export default SearchBar;

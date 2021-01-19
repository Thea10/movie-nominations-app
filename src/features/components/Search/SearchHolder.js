import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {  getMovies, getStatus, getSearchText } from "./SearchSlice";
import { ThemeContext } from "../../Theme/ThemeProvider";
import { Typography } from "@material-ui/core";
import Loader from "./SearchLoader/Loader";
import Results from "./SearchResults/Results";

const SearchHolder = () => {
  let searchHolderContent;

  const { bodyTheme } = useContext(ThemeContext);
  const status = useSelector(getStatus);
  const searchText = useSelector(getSearchText);
  const error = useSelector((state) => state.search.error);
  const movieItems = useSelector(getMovies);

  if (status === "none") {
    searchHolderContent = (
      <div className="loader-holder" style={{ background: bodyTheme.holderBg }}>
        <Typography variant="subtitle1">
          Search results will appear here
        </Typography>
      </div>
    );
  } else if (status === "loading") {
    searchHolderContent = (
      <div className="loader-holder" style={{ background: bodyTheme.holderBg }}>
        <Typography variant="subtitle1">
          Searching for "{searchText}"
        </Typography>
        <Loader />
      </div>
    );
  } else if (status === "succeeded") {
    searchHolderContent = (
      <div className="loader-holder" style={{ background: bodyTheme.holderBg }}>
        <Typography variant="subtitle1">
          Search results for "{searchText}"
        </Typography>
        <Results movies={movieItems} />
      </div>
    );
  } else if (status === "failed") {
    searchHolderContent = (
      <div className="loader-holder" style={{ background: bodyTheme.holderBg }}>
        <Typography variant="subtitle1">
          Searching for "{searchText}"
        </Typography>
        <Typography variant="caption">{error}</Typography>
        <Loader />
      </div>
    );
  }

  return <div> {searchHolderContent}</div>;
};

export default SearchHolder;

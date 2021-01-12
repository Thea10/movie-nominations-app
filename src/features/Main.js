import React, { useState, useContext } from "react";
import { Typography } from "@material-ui/core";
import SearchBar from "./components/Search/SearchBar/SearchBar";
import SearchHolder from "./components/Search/SearchHolder";
import List from "./components/Nominations/List/NominationList";
import { ThemeContext } from "./Theme/ThemeProvider";
import SwitchTheme from "./ThemeToggler/Button/SwitchTheme";

const Main = () => {
  const [switched, toggleSwitch] = useState(true);
  const { bodyTheme, toggle } = useContext(ThemeContext);

  return (
    <div
      className="main-holder"
      style={{
        backgroundColor: bodyTheme.background,
      }}
    >
      <SwitchTheme
        color={bodyTheme.togglerColor}
        switchTheme={toggle}
        checked={switched}
        toggleCheck={() => toggleSwitch(!switched)}
      />

      <div className="brand">
        <Typography style={{ color: bodyTheme.togglerColor }} variant="h4">
          myMovieAwards
        </Typography>
      </div>

      <SearchBar />
      <div className="body-holder">
        <SearchHolder />

        <List />
      </div>
    </div>
  );
};

export default Main;

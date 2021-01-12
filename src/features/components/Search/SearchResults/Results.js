import React, { useContext } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import {
  addItem,
  getList,
  removeItem,
} from "../../Nominations/NominationSlice";
import {
  makeStyles,
  Typography,
  // Accordion,
  // AccordionSummary,
  // AccordionDetails,
} from "@material-ui/core";
import { ThemeContext } from "../../../Theme/ThemeProvider";
import NominationButton from "../../Nominations/List/NominationButton";
import PosterImage from "./PosterImage";

export const accordionStyle = makeStyles(() => ({
  root: {
    color: "inherit",
    backgroundColor: "inherit",
    boxShadow: "none",
    marginTop: "0.5rem",
    "& .MuiAccordionSummary-root": {
      padding: 0,

      "& .MuiAccordionSummary-content": {
        margin: 0,
      },
      "& .MuiIconButton-root": {
        padding: 0,
        color: "inherit",
      },
    },

    "& .MuiAccordionDetails-root": {
      padding: 0,
      marginBottom: "1rem",
    },
  },
}));

const Results = ({ movies }) => {
  // const dropStyle = accordionStyle();
  const { bodyTheme } = useContext(ThemeContext);
  const movieItems = useSelector(getList);

  return (
    <div>
      {movies.map((movie, i) => {
        let { Title, Year, Poster } = movie;
       // let { Title, Year, Genre, Language, Awards, Plot, Poster } = movie;
        let nominated;
        let item = _.find(movieItems, (item) => item.Title === movie.Title);
        if (item) {
          nominated = true
        }

        return (
          <div className="loader-parent" key={i}>
            <div
              className="loader"
              style={{ background: bodyTheme.background }}
            >
              <PosterImage img={Poster} />

              <Typography variant="caption"> Title: {Title} </Typography>
              <Typography variant="caption"> Year: {Year} </Typography>
              {/* <Typography variant="caption">Genre: {Genre}</Typography>
              <Typography variant="caption">Language: {Language}</Typography>
              <Typography variant="caption">Awards: {Awards}</Typography> */}
{/* 
              <Accordion className={dropStyle.root}>
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls="plot-content"
                  id={`plot ${i}`}
                >
                  <Typography variant="caption">View Plot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption">{Plot}</Typography>
                </AccordionDetails>
              </Accordion> */}
            </div>

            <NominationButton
              nominated={nominated}
              item={movie}
              action={nominated ? removeItem : addItem}
            />
          </div>
        );
      })}
      <Typography variant="caption"> End of Results.</Typography>
    </div>
  );
};

export default Results;

import React from "react";
import { accordionStyle } from "../../Search/SearchResults/Results";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import NominationButton from "./NominationButton";
import { ExpandMoreOutlined } from "@material-ui/icons";
import PosterImage from "../../Search/SearchResults/PosterImage";

const Item = ({ movie, action }) => {
  const dropStyle = accordionStyle();
  let { Title, Plot, Poster } = movie;

  return (
    <Accordion className={dropStyle.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreOutlined />}
        aria-controls="nomination-item"
      >
        <Typography variant="caption">{Title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="caption">
          <PosterImage img={Poster} />
          {Plot}
        </Typography>
      </AccordionDetails>
      <NominationButton nominated={true} item={movie} action={action} />
    </Accordion>
  );
};

export default Item;

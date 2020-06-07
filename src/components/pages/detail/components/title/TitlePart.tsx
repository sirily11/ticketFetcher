/** @format */

import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import { IconButton, Typography, Grid } from "@material-ui/core";
import { DetailContext } from "../../../../models/DetailContext";

export default function TitlePart() {
  const { ticketInfo, clear } = React.useContext(DetailContext);

  return (
    <Grid container alignContent="center" alignItems="center">
      <IconButton
        style={{ color: "white" }}
        onClick={() => {
          clear();
          window.location.href = "#/";
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant="h6">{ticketInfo?.from?.iata}</Typography>
      <IconButton style={{ color: "white" }}>
        <FlightLandIcon />
      </IconButton>
      <Typography variant="h6">{ticketInfo?.to?.iata}</Typography>
    </Grid>
  );
}

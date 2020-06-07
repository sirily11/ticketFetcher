/** @format */

import React from "react";
import {
  Grid,
  TextField,
  createStyles,
  makeStyles,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import SearchIcon from "@material-ui/icons/Search";
import AirportSearchTextField from "./textfield/AirportSearchTextField";
import { InfoContext } from "../../../../models/InfoContext";
import { subMinutes } from "date-fns";
import { HomePage } from "../../HomePage";
import { HomePageContext } from "../../../../models/HomeContext";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: 20,
    },
    centerContainer: {
      display: "block",
      margin: "auto",
    },
    centerText: {},
  })
);

// Render search input field
export default function InputPart() {
  const classes = useStyles();
  const { setFromAirport, setToAirport, submit } = React.useContext(
    InfoContext
  );

  const { addTicketInfo } = React.useContext(HomePageContext);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={5}>
        <AirportSearchTextField
          label="From"
          onAirportSelect={(airport) => {
            if (airport) {
              setFromAirport(airport);
            }
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Tooltip title="Switch">
          <IconButton className={classes.centerContainer}>
            <FlightLandIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={5}>
        <AirportSearchTextField
          label="To"
          onAirportSelect={(airport) => {
            if (airport) {
              setToAirport(airport);
            }
          }}
        />
      </Grid>
    </Grid>
  );
}

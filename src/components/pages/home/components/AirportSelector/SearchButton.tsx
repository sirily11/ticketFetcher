/** @format */
import React from "react";
import { Grid, createStyles, makeStyles, IconButton } from "@material-ui/core";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import SearchIcon from "@material-ui/icons/Search";
import AirportSearchTextField from "./textfield/AirportSearchTextField";
import { InfoContext } from "../../../../models/InfoContext";
import { subMinutes } from "date-fns";
import { HomePage } from "../../HomePage";
import { HomePageContext } from "../../../../models/HomeContext";

const useStyles = makeStyles((theme) =>
  createStyles({
    centerContainer: {
      display: "block",
      marginRight: 0,
      marginLeft: "auto",
      marginTop: 10,
      marginBottom: 10,
    },
  })
);

export default function SearchButton() {
  const classes = useStyles();
  const { setFromAirport, setToAirport, submit } = React.useContext(
    InfoContext
  );

  const { addTicketInfo } = React.useContext(HomePageContext);
  return (
    <Grid container>
      <IconButton
        className={classes.centerContainer}
        onClick={async () => {
          let info = submit();
          if (info) {
            await addTicketInfo(info);
          }
        }}
      >
        <SearchIcon />
      </IconButton>
    </Grid>
  );
}

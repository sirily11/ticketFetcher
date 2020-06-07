/** @format */

import React, { Children } from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import { HomePageContext } from "../../../../models/HomeContext";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import TicketInfoDisplay from "./TicketInfoDisplay";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
    },
  })
);

export default function TicketDisplay() {
  const { ticketsSearch, deleteTicketInfo } = React.useContext(HomePageContext);
  const classes = useStyles();
  return (
    <Grid style={{ marginTop: 10, marginLeft: 550, marginRight: 20 }}>
      {ticketsSearch.map((t, i) => (
        <Grid key={`card-${i}`} item xs={12} className={classes.container}>
          <Card variant="outlined">
            <CardActionArea
              onClick={() => {
                window.location.href = "#/detail/" + t.id;
              }}
            >
              <CardContent>
                <TicketInfoDisplay info={t} />
              </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
              <IconButton
                style={{ marginRight: 0, marginLeft: "auto" }}
                onClick={async () => {
                  let confirm = window.confirm("Do you want to delete?");
                  if (confirm) {
                    await deleteTicketInfo(t);
                  }
                }}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

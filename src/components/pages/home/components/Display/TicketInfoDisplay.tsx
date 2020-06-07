/** @format */

import React from "react";
import { TicketInfo } from "../../../../models/interfaces/ticket";
import {
  Grid,
  makeStyles,
  createStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  IconButton,
  Chip,
  CardActions,
} from "@material-ui/core";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

interface Props {
  info: TicketInfo;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {},
  })
);

export default function TicketInfoDisplay(props: Props) {
  const { info } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={5}>
          <Typography color="textSecondary">From</Typography>
          <Typography variant="h5" component="h2">
            {info.from.iata}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <FlightLandIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5} style={{ textAlign: "end" }}>
          <Typography color="textSecondary">To</Typography>
          <Typography variant="h5" component="h2">
            {info.to.iata}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <Typography color="textSecondary">Start Date</Typography>
          <Typography variant="h5" component="h2">
            {moment(info.beginDate).format("YYYY-MM-DD")}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5} style={{ textAlign: "end" }}>
          <Typography color="textSecondary">End Date</Typography>
          <Typography variant="h5" component="h2">
            {moment(info.endDate).format("YYYY-MM-DD")}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        {info.companies.map((t, i) => (
          <Chip style={{ margin: 2 }} key={`chip-${i}`} label={t.name} />
        ))}
      </Grid>
    </React.Fragment>
  );
}

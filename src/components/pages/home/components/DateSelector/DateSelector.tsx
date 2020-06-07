/** @format */

import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { InfoContext } from "../../../../models/InfoContext";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: 20,
    },
  })
);

interface Props {}

export default function DateSelector(props: Props) {
  const classes = useStyles();
  const { setStartDate, setEndDate, startDate, endDate } = React.useContext(
    InfoContext
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.container}>
        <Grid item xs={5}>
          <KeyboardDatePicker
            fullWidth
            inputVariant="filled"
            label="Start Date"
            value={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <KeyboardDatePicker
            fullWidth
            label="End Date"
            inputVariant="filled"
            value={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

/** @format */

import React from "react";
import {
  Divider,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
} from "@material-ui/core";
import { Info } from "../../../../../models/interfaces/ticket";
import moment from "moment";

interface Props {
  index: number;
  info: Info[];
  price: number;
}

export default function DetailCard(props: Props) {
  const { info, price, index } = props;

  return (
    <Card style={{ width: "100%", padding: 20 }} variant="outlined">
      <Grid container>
        <Grid item>
          <Typography variant="h6">No. {index}</Typography>
        </Grid>
        <Grid item style={{ marginRight: 0, marginLeft: "auto" }}>
          <Typography variant="h6">${price}</Typography>
        </Grid>
      </Grid>
      {info.map((i, id) => (
        <div key={`details-${id}`}>
          {!i.isLayover ? (
            <div>
              <Typography variant="h6">{i.flightNumber}</Typography>
              <Typography>
                {i.startAirport?.iata} - {i.startAirport?.name}
              </Typography>
              <Typography variant="subtitle2">
                {moment(i.startDate).format("YYYY-MM-DD HH:MM:DD")}
              </Typography>
              <Divider style={{ minHeight: 40 }} orientation="vertical" />
              <Typography>
                {i.endAirport?.iata} - {i.endAirport?.name}
              </Typography>
              <Typography variant="subtitle2">
                {moment(i.endDate).format("YYYY-MM-DD HH:MM:DD")}
              </Typography>
            </div>
          ) : (
            <Box style={{ backgroundColor: "black" }} p={2} m={1}>
              <Typography>
                <h4 style={{ margin: 0 }}>
                  {i.startAirport?.iata}-{i.startAirport?.name}
                </h4>
                Layover{" "}
                {moment.utc((i.layoverDuration ?? 0) * 1000).format("HH:mm:ss")}
              </Typography>
            </Box>
          )}
        </div>
      ))}
    </Card>
  );
}

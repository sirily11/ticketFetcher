/** @format */

import React from "react";
import { DetailContext } from "../../../../models/DetailContext";
import { grey } from "@material-ui/core/colors";
import DetailCard from "./components/DetailCard";
import { TicketDetail } from "../../../../models/interfaces/ticket";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Collapse,
  CircularProgress,
  Grid,
  Tooltip,
} from "@material-ui/core";

export default function DetailsPanel() {
  const { ticketInfo, fetch, clear } = React.useContext(DetailContext);

  return (
    <div>
      {ticketInfo?.ticketDetails.map((td, i) => (
        <ExpansionPanel variant="outlined" defaultExpanded={true}>
          <ExpansionPanelSummary>
            <Grid container>
              <Grid item>
                <Typography variant="h6">{td.company.name}</Typography>
              </Grid>
              <Grid item style={{ marginRight: 0, marginLeft: "auto" }}>
                <Collapse in={td.isLoading}>
                  <Tooltip title="Loading the details">
                    <CircularProgress />
                  </Tooltip>
                </Collapse>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {td.airlineInfo.map((details, i) => (
              <DetailCard
                key={`card-${i}`}
                info={details.info}
                price={details.price}
                index={i}
              />
            ))}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

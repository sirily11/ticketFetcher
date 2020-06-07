/** @format */

import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { DetailContext } from "../../models/DetailContext";
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Collapse,
  LinearProgress,
  Container,
  CssBaseline,
  Drawer,
  List,
  Fade,
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";
import TitlePart from "./components/title/TitlePart";
import DetailsPanel from "./components/details/DetailsPanel";
import { makeStyles, createStyles } from "@material-ui/core";
import TicketInfoDisplay from "../home/components/Display/TicketInfoDisplay";

interface TParams {
  id: string;
}

const theme = createMuiTheme({});

const useStyles = makeStyles((theme) =>
  createStyles({
    appbar: {
      marginLeft: 350,
    },
    container: {
      paddingTop: 50,
      marginLeft: 350,
      marginRight: 30,
      marginBottom: 30,
    },
    drawer: {
      margin: 20,
    },
  })
);

export default function DetailPage({ match }: RouteComponentProps<TParams>) {
  const { ticketInfo, fetch, clear } = React.useContext(DetailContext);
  const classes = useStyles();

  React.useEffect(() => {
    fetch(match.params.id);
  }, []);

  return (
    <div>
      <AppBar elevation={0} style={{ backgroundColor: grey[900] }}>
        <Toolbar className={classes.appbar}>
          <Collapse in={ticketInfo === undefined}>
            <LinearProgress />
          </Collapse>
          <Collapse in={ticketInfo !== undefined}>
            <TitlePart />
          </Collapse>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List className={classes.drawer}>
          {ticketInfo && (
            <Collapse in={ticketInfo !== undefined} mountOnEnter>
              <TicketInfoDisplay info={ticketInfo} />
            </Collapse>
          )}
        </List>
      </Drawer>
      <div className={classes.container}>
        <Fade in={ticketInfo !== undefined} mountOnEnter>
          <DetailsPanel />
        </Fade>
      </div>
    </div>
  );
}

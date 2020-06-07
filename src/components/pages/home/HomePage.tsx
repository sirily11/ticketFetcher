/** @format */

import React from "react";
import {
  Typography,
  Divider,
  Card,
  CardHeader,
  Grid,
  createStyles,
  makeStyles,
  CardContent,
  Paper,
  Drawer,
  List,
} from "@material-ui/core";
import InputPart from "./components/AirportSelector/InputPart";
import CompanySelector from "./components/companySelector/CompanySelector";
import DateSelector from "./components/DateSelector/DateSelector";
import { Company } from "../../models/interfaces/company";
import { InfoProvider } from "../../models/InfoContext";
import { HomePageContext } from "../../models/HomeContext";
import TicketDisplay from "./components/Display/TicketDisplay";
import SearchButton from "./components/AirportSelector/SearchButton";

export function HomePage() {
  return (
    <InfoProvider>
      <div id="home">
        <Drawer variant="permanent">
          <List style={{ overflowX: "hidden", width: 550, marginTop: 40 }}>
            <InputPart />
            <DateSelector />
            <CompanySelector />
            <SearchButton />
            <Divider variant="middle" />
          </List>
        </Drawer>
        <TicketDisplay />
      </div>
    </InfoProvider>
  );
}

/** @format */

import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Airports from "./Airport.json";
import { Airport } from "../../../../../models/interfaces/Airports";

interface Props {
  label: string;
  airport?: Airport;
  onAirportSelect?(airport: Airport | null): void;
}

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

export default function AirportSearchTextField(props: Props) {
  const [airports, setAirports] = React.useState<Airport[]>(
    (Airports as Airport[]).slice(0, 10)
  );

  const { label, onAirportSelect, airport } = props;

  return (
    <Autocomplete
      id="combo-box-demo"
      value={airport}
      options={airports}
      autoComplete={false}
      getOptionLabel={(option) => option.iata + " " + option.name}
      onChange={(e, value) => {
        if (onAirportSelect) {
          onAirportSelect(value);
        }
      }}
      renderOption={(option) => (
        <React.Fragment>
          <span> {countryToFlag(option.iso)} </span>
          {option.iata} {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="filled"
          fullWidth
          onChange={(e) => {
            let value = e.target.value.toLowerCase();
            let suggestedAirports: Airport[] = [];
            for (let airport of Airports as Airport[]) {
              if (airport.name && airport.iata) {
                if (
                  airport.name.toLowerCase().includes(value) ||
                  airport.iata.toLowerCase().includes(value)
                ) {
                  suggestedAirports.push(airport);
                }
                if (suggestedAirports.length > 10) {
                  break;
                }
              }
            }
            setAirports(suggestedAirports);
          }}
        />
      )}
    />
  );
}

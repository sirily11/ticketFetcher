/** @format */

import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Company } from "../../../../models/interfaces/company";
import { companies } from "../../../../models/companies/Companies";
import { InfoContext } from "../../../../models/InfoContext";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: 20,
    },
  })
);

interface Props {}

export default function CompanySelector(props: Props) {
  const classes = useStyles();
  const { setSelectedCompanies } = React.useContext(InfoContext);

  return (
    <FormGroup row className={classes.container}>
      {companies.map((c, i) => (
        <FormControlLabel
          key={c.name}
          label={c.name}
          control={
            <Checkbox
              onChange={(e, checked) => {
                setSelectedCompanies(c, checked);
              }}
            />
          }
        />
      ))}
    </FormGroup>
  );
}

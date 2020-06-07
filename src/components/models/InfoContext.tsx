/** @format */

/**
 * Manage info
 */

import React, { Component } from "react";
import { Airport } from "./interfaces/Airports";
import { Company } from "./interfaces/company";
import { TicketInfo } from "./interfaces/ticket";
import { v4 as uuidv4 } from "uuid";

interface InfoContext {
  startDate: Date | null;
  endDate: Date | null;
  from?: Airport;
  to?: Airport;
  selectedCompanies: Company[];
  setSelectedCompanies(company: Company, checked: boolean): void;
  setFromAirport(airport: Airport): void;
  setToAirport(airport: Airport): void;
  setStartDate(date: Date | null): void;
  setEndDate(date: Date | null): void;
  submit(): TicketInfo | undefined;
}

interface InfoProps {}

export class InfoProvider extends Component<InfoProps, InfoContext> {
  constructor(props: InfoProps) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      selectedCompanies: [],
      setSelectedCompanies: this.setSelectedCompanies,
      setFromAirport: this.setFromAirport,
      setToAirport: this.setToAirport,
      setEndDate: this.setEndDate,
      setStartDate: this.setStartDate,
      submit: this.submit,
    };
  }

  submit = (): TicketInfo | undefined => {
    const { from, to, startDate, endDate, selectedCompanies } = this.state;
    if (startDate && endDate) {
      let difference = endDate.getTime() - startDate.getTime();
      if (difference < 0) {
        alert("End date should not before the start date");
        return;
      }
    } else {
      alert("Date should not be null");
      return;
    }

    if (from && to) {
      if (from === to) {
        alert("Two airports should not be the same");
        return;
      }
    } else {
      alert("Airport should not be empty");
      return;
    }
    return {
      id: uuidv4(),
      from: from,
      to: to,
      companies: selectedCompanies,
      beginDate: startDate,
      endDate: endDate,
      ticketDetails: [],
    };
  };

  setSelectedCompanies = (company: Company, checked: boolean) => {
    const { selectedCompanies } = this.state;

    if (checked) {
      selectedCompanies.push(company);
      this.setState({ selectedCompanies });
    } else {
      let removeIndex = selectedCompanies.findIndex(
        (co) => co.id === company.id
      );
      selectedCompanies.splice(removeIndex, 1);
      this.setState({ selectedCompanies });
    }
  };

  setFromAirport = (airport: Airport) => {
    this.setState({ from: airport });
  };

  setToAirport = (airport: Airport) => {
    this.setState({ to: airport });
  };

  setStartDate = (date: Date | null) => {
    this.setState({ startDate: date });
  };
  setEndDate = (date: Date | null) => {
    this.setState({ endDate: date });
  };
  render() {
    return (
      <InfoContext.Provider value={this.state}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

//@ts-ignore
const context: InfoContext = {};

export const InfoContext = React.createContext(context);

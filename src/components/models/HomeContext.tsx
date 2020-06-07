/** @format */

import React, { Component } from "react";
import { TicketInfo } from "./interfaces/ticket";
import { companies } from "./companies/Companies";

interface HomePageContext {
  ticketsSearch: TicketInfo[];
  addTicketInfo(ticketInfo: TicketInfo): Promise<void>;
  deleteTicketInfo(ticketInfo: TicketInfo): Promise<void>;
}

interface HomePageProps {}

export class HomePageProvider extends Component<
  HomePageProps,
  HomePageContext
> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      ticketsSearch: [
        {
          id: "abc",
          from: { name: "SZ", iata: "SZX", iso: "a" },
          to: { name: "SH", iata: "PVG", iso: "a" },
          beginDate: new Date(),
          endDate: new Date(),
          companies: companies,
          ticketDetails: [],
        },
        {
          id: "abcd",
          from: { name: "SZ", iata: "SZX", iso: "a" },
          to: { name: "SH", iata: "PVG", iso: "a" },
          beginDate: new Date(),
          endDate: new Date(),
          companies: companies,
          ticketDetails: [],
        },
        {
          id: "abcd",
          from: { name: "SZ", iata: "SZX", iso: "a" },
          to: { name: "SH", iata: "PVG", iso: "a" },
          beginDate: new Date(),
          endDate: new Date(),
          companies: companies,
          ticketDetails: [],
        },
        {
          id: "abcd",
          from: { name: "SZ", iata: "SZX", iso: "a" },
          to: { name: "SH", iata: "PVG", iso: "a" },
          beginDate: new Date(),
          endDate: new Date(),
          companies: companies,
          ticketDetails: [],
        },

        {
          id: "abcd",
          from: { name: "SZ", iata: "SZX", iso: "a" },
          to: { name: "SH", iata: "PVG", iso: "a" },
          beginDate: new Date(),
          endDate: new Date(),
          companies: companies,
          ticketDetails: [],
        },
      ],
      addTicketInfo: this.addTicketInfo,
      deleteTicketInfo: this.deleteTicketInfo,
    };
  }

  addTicketInfo = async (ticketInfo: TicketInfo) => {
    const { ticketsSearch } = this.state;
    ticketsSearch.push(ticketInfo);
    this.setState({ ticketsSearch });
  };

  deleteTicketInfo = async (ticketInfo: TicketInfo) => {
    const { ticketsSearch } = this.state;
    let removeIndex = ticketsSearch.findIndex((t) => t);
    ticketsSearch.splice(removeIndex, 1);

    this.setState({ ticketsSearch });
  };

  render() {
    return (
      <HomePageContext.Provider value={this.state}>
        {this.props.children}
      </HomePageContext.Provider>
    );
  }
}

//@ts-ignore
const context: HomePageContext = {};

export const HomePageContext = React.createContext(context);

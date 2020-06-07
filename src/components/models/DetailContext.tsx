/** @format */

import React, { Component } from "react";
import { TicketInfo } from "./interfaces/ticket";
import { companies } from "./companies/Companies";

interface DetailContext {
  /**
   * Fetch ticketInfo base on id
   * @param id flightTicket id
   */
  fetch(id: string): Promise<void>;
  clear(): void;
  ticketInfo?: TicketInfo;
}

interface DetailProps {}

export class DetailProvider extends Component<DetailProps, DetailContext> {
  constructor(props: DetailProps) {
    super(props);
    this.state = {
      fetch: this.fetch,
      clear: this.clear,
    };
  }

  clear = () => {
    this.setState({ ticketInfo: undefined });
  };

  fetch = async (id: string): Promise<void> => {
    let ticketInfo: TicketInfo = {
      id: "abcd",
      from: { name: "SZ", iata: "SZX", iso: "a" },
      to: { name: "SH", iata: "PVG", iso: "a" },
      beginDate: new Date(),
      endDate: new Date(),
      companies: companies,
      ticketDetails: [
        {
          company: companies[0],
          isLoading: true,
          airlineInfo: [
            {
              startDate: new Date(),
              price: 300,

              info: [
                {
                  flightNumber: "DL287",
                  startAirport: {
                    name: "Shenzhen Bao'an International Airport",
                    iata: "SZX",
                    iso: "a",
                  },
                  endAirport: {
                    name: "Xiamen Gaoqi international Airport",
                    iata: "XMN",
                    iso: "a",
                  },
                  isLayover: false,
                },
                {
                  startAirport: {
                    name: "Xiamen Gaoqi international Airport",
                    iata: "XMN",
                    iso: "a",
                  },
                  isLayover: true,
                  layoverDuration: 30,
                },
                {
                  flightNumber: "DL287",
                  startAirport: {
                    name: "Xiamen Gaoqi international Airport",
                    iata: "XMN",
                    iso: "a",
                  },
                  endAirport: {
                    name: "Pudong International Airport",
                    iata: "PVG",
                    iso: "a",
                  },
                  startDate: new Date(),
                  endDate: new Date(),
                  isLayover: false,
                },
              ],
            },
          ],
        },
        {
          company: companies[1],
          isLoading: false,
          airlineInfo: [
            {
              startDate: new Date(),
              price: 300,

              info: [
                {
                  flightNumber: "DL287",
                  startAirport: {
                    name: "Shenzhen Bao'an International Airport",
                    iata: "SZX",
                    iso: "a",
                  },
                  endAirport: {
                    name: "Xiamen Gaoqi international Airport",
                    iata: "XMN",
                    iso: "a",
                  },
                  isLayover: false,
                },
                {
                  startAirport: {
                    name: "Xiamen Gaoqi international Airport",
                    iata: "XMN",
                    iso: "a",
                  },
                  isLayover: true,
                  layoverDuration: 30,
                },
                {
                  flightNumber: "DL287",
                  startAirport: {
                    name: "Xiamen Gaoqi international Airport",
                    iata: "XMN",
                    iso: "a",
                  },
                  endAirport: {
                    name: "Pudong International Airport",
                    iata: "PVG",
                    iso: "a",
                  },
                  startDate: new Date(),
                  endDate: new Date(),
                  isLayover: false,
                },
              ],
            },
          ],
        },
      ],
    };
    this.setState({ ticketInfo: ticketInfo });
  };

  render() {
    return (
      <DetailContext.Provider value={this.state}>
        {this.props.children}
      </DetailContext.Provider>
    );
  }
}

//@ts-ignore
const context: DetailContext = {};

export const DetailContext = React.createContext(context);

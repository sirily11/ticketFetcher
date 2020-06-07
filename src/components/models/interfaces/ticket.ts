import { Airport } from './Airports';
import { Company } from './company';
export interface TicketInfo {
    id: string;
    from: Airport;
    to: Airport;
    beginDate: Date;
    endDate: Date;
    companies: Company[]
    ticketDetails: TicketDetail[]
}

export interface Info {
    flightNumber?: string;
    startAirport?: Airport;
    endAirport?: Airport;
    startDate?: Date;
    endDate?: Date;
    isLayover: boolean;
    layoverDuration?: number;
}

export interface FlightInfo {
    info: Info[]
    price: number;
    startDate: Date;
    flightDuration?: number;

}

export interface TicketDetail {
    company: Company;
    airlineInfo: FlightInfo[];
    isLoading: boolean;
}
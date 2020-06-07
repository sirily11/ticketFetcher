import { FlightInfo } from '../interfaces/ticket';
import { readlink } from 'fs';

/**
 * Whether two flights are the same. 
 * @param flightA Flight info a
 * @param flightB Flight info b
 */
export function isSameFlight(flightA: FlightInfo, flightB: FlightInfo): boolean {
    let isSame = true;

    if (flightA.info.length !== flightB.info.length) {
        return false;
    }

    for (let i = 0; i < flightA.info.length; i++) {

        let infoA = flightA.info[i];
        let infoB = flightB.info[i];

        if (infoA.flightNumber !== infoB.flightNumber) {
            isSame = false;
            break;
        }

        // if (infoA.startAirport?.iata !== infoB.startAirport?.iata) {
        //     isSame = false;
        //     break;
        // }

        // if (infoA.endAirport?.iata !== infoB.endAirport?.iata) {
        //     isSame = false;
        //     break;
        // }

        if (infoA.startDate?.getTime() !== infoB.startDate?.getTime()) {
            isSame = false;
            break;
        }

        if (infoA.endDate?.getTime() !== infoB.endDate?.getTime()) {
            isSame = false;
            break;
        }

    }

    return isSame;
}
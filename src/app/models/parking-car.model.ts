export class Rates {
    Id: number;
    Rate: number;
    Date: Date;
    Description: string;
    ParkingService: ParkingService[];
}

export class Vehicle {
    Id: number;
    VehicularPlate: string;
    Brand: string;
    Color: string;
    Driver: string;
    DriverIdentification: number;
    Phone: number;
    ParkingService: ParkingService[];
}

export class ParkingService {
    Id: number;
    IdRate: number;
    Rates: Rates[];
    IdVehicle: number;
    Vehicle: Vehicle[];
    DateTimeEntry: string;
    DateTimeExit: string;
    DriverIdentification: number;
    ServicePrice: number;
    Estate: number;
    Minutes?: number;
}

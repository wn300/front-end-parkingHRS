export interface Rates {
    Id: number;
    Rate: number;
    Date: Date;
    Description: string;
    ParkingService: ParkingService[];
}

export interface Vehicle {
    Id: number;
    VehicularPlate: string;
    Brand: string;
    Color: string;
    Driver: string;
    DriverIdentification: number;
    Phone: number;
    ParkingService: ParkingService[];
}

export interface ParkingService {
    Id: number;
    IdRate: number;
    Rate: Rates[];
    IdVehicle: number;
    Vehicle: Vehicle[];
    DateTimeEntry: Date;
    DateTimeExit: Date;
    DriverIdentification: number;
    ServicePrice: number;
    Estate: number;
}

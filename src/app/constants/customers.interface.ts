export interface ICustomer {
    id: number;
    task: string;
    status: string;
    statusText: string;
    from: string;
    to: string;
    address: string;
    date: string;
    coords: ICoords;
}

export interface ICoords {
    lat: number;
    lng: number;
}
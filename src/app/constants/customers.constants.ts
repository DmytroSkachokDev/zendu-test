import { ICustomer } from "./customers.interface"

export const CUSTOMERS: ICustomer[] = [
    {
        id: 1,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'success',
        statusText: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        date: 'October 06, 2022 02:38:00',
        coords: { 
            lat: 43.656499796077554,
            lng: -79.36825266815765
        }
    },
    {
        id: 2,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'success',
        statusText: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
        date: 'October 06, 2022 01:40:00',
        coords: { 
            lat: 43.66068096422197,
            lng: -79.37557891234388
        }
    },
    {
        id: 3,
        completed: false,
        task: 'Work Flow: Location Submitted',
        status: 'error',
        statusText: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '4140 Parker Rd. Allentown, New Mexico 31134',
        date: 'October 07, 2022 01:14:00',
        coords: {  
            lat: 43.6606197609441, 
            lng: -79.3694876989369
        }
    },
    {
        id: 4,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'unassigned',
        statusText: 'Unassigned',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        date: 'October 07, 2022 01:14:00',
        coords: {
            lat: 43.65797265947489, 
            lng: -79.36652669241961
        }
    },
    {
        id: 5,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'unassigned',
        statusText: 'Unassigned',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        date: 'October 07, 2022 03:56:00',
        coords: { 
            lat: 43.65661081036619,  
            lng: -79.3620428825506
        }
    },
    {
        id: 6,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'error',
        statusText: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        date: 'October 07, 2022 04:20:00',
        coords: {
            lat: 43.65762072390077,
            lng: -79.36238128329542 
        }
    },
    {
        id: 7,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'error',
        statusText: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        date: 'October 08, 2022 04:12:00',
        coords: { 
            lat: 43.65561862884015,
            lng: -79.37350451398743
        }
    },
    {
        id: 8,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'success',
        statusText: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        date: 'October 08, 2022 04:37:00',
        coords: { 
            lat: 43.65322507774595,
            lng: -79.37289834958268
        }
    },
    {
        id: 9,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'success',
        statusText: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        date: 'October 09, 2022 18:12:00',
        coords: { 
            lat: 43.66169080929926, 
            lng: -79.36703429353688
        }
    },
    {
        id: 10,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'error',
        statusText: 'Uncomplete',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        date: 'October 10, 2022 04:12:00',
        coords: {
            lat: 43.65379745733883,
            lng: -79.37034013031518
        }
    },
    {
        id: 11,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'success',
        statusText: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
        date: 'October 10, 2022 18:12:00',
        coords: {  
            lat: 43.65841593589992, 
            lng: -79.35964560297595
        }
    },
    {
        id: 12,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'unassigned',
        statusText: 'Unassigned',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        date: 'October 11, 2022 04:12:00',
        coords: {
            lat: 43.65444923611496,
            lng: -79.36139673544193
        }
    },
    {
        id: 13,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'success',
        statusText: 'Low Risk',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        date: 'October 12, 2022 10:50:00',
        coords: {
            lat: 43.653001250000344, 
            lng: -79.36312702109286
        }
    },
    {
        id: 14,
        completed: false,
        task: 'Work Flow: Requires Location',
        status: 'unassigned',
        statusText: 'Unassigned',
        from: 'zendu@zendu.com',
        to: 'tracy@zenduit.com',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        date: 'October 12, 2022 16:12:00',
        coords: { 
            lat: 43.651794568235054,
            lng: -79.36500323444929
        }
    },
]
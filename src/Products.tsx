import denji from "./Denji.png"
import mauzi from "./Mauzi.png"
import nezuko from "./Nezuko.png"
import panda from "./Panda.png"
import pochita from "./Pochita.png"
import power from "./Power.png"

export interface IProduct {
    id: number
    name: string
    type: string
    image: string
    longDescription: string
    specs?: ISpecs
}

export interface ISpecs {
    actuationForce: string
    actuationPoint: string
    bottomOut: string
    bottomOutTravel: string
    price: string
}

export class Collection {
    items: IProduct[] = [
        {
            id: 1,
            name: "Holy Panda",
            type: "Tactile",
            image: "panda",
            longDescription: "...",
            specs: {
                actuationForce: "44",
                actuationPoint: "2.4",
                bottomOut: "62",
                bottomOutTravel: "3.8",
                price: "1.60"
            }
        },
        {
            id: 2,
            name: "Power",
            type: "Tactile",
            image: "power",
            longDescription: "...",
            specs: {
                actuationForce: "55",
                actuationPoint: "2.5",
                bottomOut: "72",
                bottomOutTravel: "4.5",
                price: "1.70"
            }
        },
        {
            id: 3,
            name: "Denji",
            type: "Not tactile",
            image: "denji",
            longDescription: "...",
            specs: {
                actuationForce: "69",
                actuationPoint: "5.4",
                bottomOut: "63",
                bottomOutTravel: "3.20",
                price: "2.20"
            }
        },
        {
            id: 4,
            name: "Pochita",
            type: "Tactile",
            image: "pochita",
            longDescription: "...",
            specs: {
                actuationForce: "12",
                actuationPoint: "1.4",
                bottomOut: "12",
                bottomOutTravel: "3.0",
                price: "7.80"
            }
        },
        {
            id: 5,
            name: "Mauzi",
            type: "Not tactile",
            image: "mauzi",
            longDescription: "...",
            specs: {
                actuationForce: "4",
                actuationPoint: "5.5",
                bottomOut: "70",
                bottomOutTravel: "9.8",
                price: "2.30"
            }
        },        {
            id: 6,
            name: "Nezuko",
            type: "Tactile",
            image: "nezuko",
            longDescription: "...",
            specs: {
                actuationForce: "14",
                actuationPoint: "1.4",
                bottomOut: "12",
                bottomOutTravel: "9.8",
                price: "9.60"
            }
        },
    ]
    handleItemClicked(id: number) {}
}
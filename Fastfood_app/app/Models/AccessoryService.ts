import { Http } from "@nativescript/core";
import { Accessory } from "./Accessory"

export class AccessoryService {
    private host: string
    constructor() {
        this.host = "192.168.8.122:5000/api/"
    }

    private accesories = new Array<Accessory>(
        { id: 1, name: "Skinke", tag: "tilbehør" },
        { id: 2, name: "Pep", tag: "tilbehør" },
        { id: 3, name: "Skidwadawnke", tag: "tilbehør" },
        { id: 4, name: "Skinxzczxcke", tag: "tilbehør" },
        { id: 5, name: "Skinsdke", tag: "tilbehør" },
        { id: 6, name: "Skindske", tag: "tilbehør" },
        { id: 7, name: "Skinsdke", tag: "tilbehør" },
        { id: 8, name: "Sksdinke", tag: "tilbehør" },
        { id: 9, name: "Sksdinke", tag: "tilbehør" },
        { id: 10, name: "Skaszinke", tag: "tilbehør" }
    )

    GetAccessories() {
        Http.getJSON(`http://192.168.8.122:5000/api/Accessories`).then(
            (result: any) => {
                console.log(result)
            },
            e => {
                console.log(e)
             }
        )
    }

    Getsmth() {
        return 2;
    }
}
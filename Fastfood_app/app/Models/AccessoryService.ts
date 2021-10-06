import { Http, HttpRequestOptions, HttpResponse, ObservableArray } from "@nativescript/core";
import { Accessory } from "./Accessory"



// Its a vue framework but there could be something of value for https requests 
//https://blog.nativescript.org/make-http-requests-to-remote-web-services-in-a-nativescript-vue-app/index.html

export class AccessoryService {
    private host: string
    private observableArray = new ObservableArray(10)
    constructor() {
        //private http: HttpRequestOptions
        this.host = "192.168.8.122:5000/api/"
    }

    private items = new Array<Accessory>(
        { id: 1, name: "Skinke", priceOfItem: 123213, category: "tilbehør" },
        { id: 2, name: "Pep", priceOfItem: 123213, category: "tilbehør" },
        { id: 3, name: "Skidwadawnke", priceOfItem: 123213, category: "tilbehør" },
        { id: 4, name: "Skinxzczxcke", priceOfItem: 123213, category: "tilbehør" },
        { id: 5, name: "Skinsdke", priceOfItem: 123213, category: "tilbehør" },
        { id: 6, name: "Skindske", priceOfItem: 123213, category: "tilbehør" },
        { id: 7, name: "Skinsdke", priceOfItem: 123213, category: "tilbehør" },
        { id: 8, name: "Sksdinke", priceOfItem: 123213, category: "tilbehør" },
        { id: 9, name: "Sksdinke", priceOfItem: 123213, category: "tilbehør" },
        { id: 10, name: "Skaszinke", priceOfItem: 123213, category: "tilbehør" }
    )

    public async Getsmth(): Promise<Accessory[]> {

        const items = await new Promise<Accessory[]>((resolve, reject) => {
            resolve(this.items)
        })

        return items.filter(i => i.id >= 2)
    }

    public async GetAccessories(): Promise<Accessory[]> {
        let o: Accessory[]

        const accessory = await new Promise<Accessory[]>((resolve, reject) => {
            Http.getString("http://10.0.2.2:5000/api/Accessories").then(
                (result: any) => {
                    //console.log("Got Data")

                    resolve(JSON.parse(result))
                },
                e => {
                    console.log("shits fucked");
                    console.dir(e)
                }
            )
        })

        return accessory


        /*
        console.log("dwadawd");
              console.log("calls")
              Http.request({
                  url: "http://10.0.2.2:5000/api/Accessories/4",
                  method: "GET",
                  headers: { "Content-Type": "application/json" }
                  
                }).then(
                  (response: HttpResponse) => {
                    const result = response.content.toJSON();
                    console.log(`Http POST Result: ${result}`)
                  },
                  (e) => {}
                );
        
              */


    }



}
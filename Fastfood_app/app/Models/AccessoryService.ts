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

    GetAccessories(): Array<Accessory> {
        let o: any
        console.log("calls")
      
        
        Http.getString("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then(
            (result: any) => {
                console.log("dwasdsd " + result)
            },
            e => {
                console.log("shits fucked");
                console.dir(e)
            }
        )
        return o

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


    Getsmth() {
        return 12

        console.log("here")
        fetch(`http://10.0.2.2:5000/api/Accessories`).then(
            response => {
                if (response.ok) {
                    console.log(response.json)
                }
            })
        return
    }
}
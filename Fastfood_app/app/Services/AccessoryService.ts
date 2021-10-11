import { Http, HttpRequestOptions, HttpResponse, ObservableArray } from "@nativescript/core";
import { Accessory } from "../Models/Accessory"



// Its a vue framework but there could be something of value for https requests 
//https://blog.nativescript.org/make-http-requests-to-remote-web-services-in-a-nativescript-vue-app/index.html

export class AccessoryService {
    
    // Laver en string sådan at skrive fejl skulle der være mindre af
    private host: string = "http://10.0.2.2:5000/api/"
    constructor() {
        //private http: HttpRequestOptions
    }

    // Denne funktion returnere Accessory ud fra id'et baseret ud fra parameter. Den fungere asynkront ud fra promise og returnere data når den får data.
    // hvor vi har resolve og reject for at kunne kigge på disse resultater og få en fejl besked, hvis der skulle være noget 
    public async GetAccessory(id: number): Promise<Accessory> {
        const accessory = await new Promise<Accessory>((resolve, reject) => {
            Http.getString(`${this.host}Accessories/${id}`).then(
                (result: any) => {
                    console.log(resolve(JSON.parse(result)))
                },
                e => {
                    console.dir(e)
                }
            )
        })
        return accessory
    }

    //Samme som GetAccessory bare uden Id og henter et Array af objekter
    public async GetAccessories(): Promise<Accessory[]> {
        const accessory = await new Promise<Accessory[]>((resolve, reject) => {
            Http.getString(`${this.host}Accessories`).then(
                (result: any) => {
                    resolve(JSON.parse(result))
                },
                e => {
                    console.log("shits fucked");
                    console.dir(e)
                }
            )
        })
        return accessory
    }

    //En POST funktion vi giver 3 parameter, og for at kunne lave en POST kommando til vores server skal det stå skrevet i header, 
    //samt formatet vores data bliver sendt i 
    public async PostAccessory(_name, _priceOfItem, _category): Promise<Accessory> {
        const accessory = await new Promise<Accessory>(() => {
            Http.request({
                url: `${this.host}Accessories`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    name: _name,
                    priceOfItem: _priceOfItem,
                    category: _category
                }),
              }).then(
                (response: HttpResponse) => {
                  // og så skrives resultatet ud med den data du har sendt for at verificere
                  const result: Accessory = response.content.toJSON();
                  console.log(`Http POST Result: ${result.name}`)
                },
                (e) => {}
              );
        })
        return accessory
    }

    //samme funktion som PostAccessory men DELETE istedetfor og med en id
    public async DelAccessory(_id): Promise<Accessory> {
        const http = await new Promise<Accessory>(() => {
            Http.request({
                url: `${this.host}Accessories/${_id}`,
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    name: _id
                }),
              }).then(
                (response: HttpResponse) => {
                  // og så skrives resultatet ud med den data du har sendt for at verificere
                  const result: Accessory = response.content.toJSON();
                  console.log(`Http POST Result: ${result.name}`)
                },
                (e) => {}
              );
        })
        return http
    }

}
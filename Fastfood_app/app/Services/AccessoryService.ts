import { Http, HttpRequestOptions, HttpResponse, ObservableArray } from "@nativescript/core";
import { Accessory } from "../Models/Accessory"



// Its a vue framework but there could be something of value for https requests 
//https://blog.nativescript.org/make-http-requests-to-remote-web-services-in-a-nativescript-vue-app/index.html

export class AccessoryService {
    private host: string = "http://10.0.2.2:5000/api/"
    private observableArray = new ObservableArray(10)
    constructor() {
        //private http: HttpRequestOptions
    }

    public async GetAccessory(id: number): Promise<Accessory> {
        const accessory = await new Promise<Accessory>((resolve, reject) => {
            Http.getString(`${this.host}Accessories/${id}`).then(
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
                  const result: Accessory = response.content.toJSON();
                  console.log(`Http POST Result: ${result.name}`)
                },
                (e) => {}
              );
        })
        return accessory
    }

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
                  const result: Accessory = response.content.toJSON();
                  console.log(`Http POST Result: ${result.name}`)
                },
                (e) => {}
              );
        })
        return http
    }

}
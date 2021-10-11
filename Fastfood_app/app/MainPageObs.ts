import { Http, Observable, ObservableArray } from "@nativescript/core";
import { Accessory } from "./Models/Accessory";
import { AccessoryService } from "./Services/AccessoryService";


export class ViewModel extends Observable {
  private _ArrayOfAccessories: Accessory[]
  private _number: number;
  private _AccessoryService: AccessoryService;

  constructor() {
    super()
    this._AccessoryService = new AccessoryService

    //vi kalder vores funktioner i vores constructor sådan at det data der skal vises bliver hentet med det samme
    this.onTap()
    this.GetAccessoryId(1)
  }

  //#region Getters and setters

  //Der bliver lavet en notifyPropertyChange, hvor den første parameter er til den variable der skal ændres og den anden parameter er for skrive værdien ud.
  public get number(): number {
    return this._number;
  }

  public set number(v: number) {
    this._number = v;
    //
    this.notifyPropertyChange("_number", v)
  }


  public get ArrayOfAccessories(): Accessory[] {
    return this._ArrayOfAccessories;
  }

  public set ArrayOfAccessories(v: Accessory[]) {
    this._ArrayOfAccessories = v;
    this.notifyPropertyChange("_ArrayOfAccessories", v)
  }
  //#endregion


  //en funktion for at få accessory med id og konsol logger det når vi får respons fra det. Denne get er fra et promise sådan at vi gør noget når vi får respons
  public GetAccessoryId(id: number) {
    this._AccessoryService.GetAccessory(id).then((s => {
      console.log(s)
    }))
  }

  //en funktion for at få accessory og lægger den nye data over i vores array af objekter. Denne get er fra et promise sådan at vi gør noget når vi får respons
  onTap() {
    this._AccessoryService.GetAccessories().then((accessory => {
      this.ArrayOfAccessories = accessory
    }))
  }
}
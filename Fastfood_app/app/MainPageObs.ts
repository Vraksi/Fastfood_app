import { Http, Observable, ObservableArray } from "@nativescript/core";
import { Accessory } from "./Models/Accessory";
import { AccessoryService } from "./Services/AccessoryService";


export class ViewModel extends Observable {
  private _Accessory: ObservableArray<Accessory>;
  private _ArrayOfAccessories: Accessory[]
  private _number: number;
  private _AccessoryService: AccessoryService;

  constructor() {
    super()
    this._AccessoryService = new AccessoryService
    this.number = 0
    this._Accessory = new ObservableArray()
    this._Accessory.on(ObservableArray.changeEvent, (args: any) => {
      //console.log("Added "+ args.index); // Index of the changed item (in this case 7).
    });
    this.onTap()
    this.GetAccessoryId(6)
    
  }

  public get number(): number {
    return this._number;
  }

  public set number(v: number) {
    this._number = v;
    this.notifyPropertyChange("_number", v)
  }


  public get ArrayOfAccessories(): Accessory[] {
    return this._ArrayOfAccessories;
  }

  public set ArrayOfAccessories(v: Accessory[]) {
    this._ArrayOfAccessories = v;
    this.notifyPropertyChange("_ArrayOfAccessories", v)
  }


  public numbersetter() {
    this.number = 12
  }

  public GetAccessoryId(id: number) {
    this._AccessoryService.GetAccessory(id).then((s => {
      console.log(s)
    }))
  }

  onTap() {
    this._AccessoryService.PostAccessory("dwadaw", 1323, "food")
    this._AccessoryService.DelAccessory(30)

    this._AccessoryService.GetAccessories().then((accessory => {
      //console.log(accessory)
      this.ArrayOfAccessories = accessory
    }))
  }
}
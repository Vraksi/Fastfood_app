import { Observable } from "@nativescript/core";
import { Accessory } from "./Models/Accessory";
import { AccessoryService } from "./Models/AccessoryService";


export class ViewModel extends Observable{
    private _Accessory: Accessory[];
    private _number : number;
    private _AccessoryService: AccessoryService;
  
    constructor(){
      super()
      this._AccessoryService = new AccessoryService
      this.number = 0
    }
  
    public get number() : number {
      return this._number;
    }
  
    public set number(v : number) {
      this._number = v;
      this.notifyPropertyChange("_number", v)
    }
    
    
    public get Accessory() : Accessory[] {
      return this._Accessory;
    }
  
    public set Accessory(v : Accessory[]) {
      this._Accessory = v;
      this.notifyPropertyChange("_Accessory", v)
    }
  
  
    public numbersetter(){
      this.number = 12
    }
  
    public AccessorySetter(){
  
    }
  
    onTap(){
      this.Accessory = this._AccessoryService.GetAccessories()
      
      //TODO this doesnt 
      //this._Accessory = this._AccessoryService.GetAccessories()
      
      
      //this._Accessory = _AccessoryService.GetAccessories()
      
    }
  }
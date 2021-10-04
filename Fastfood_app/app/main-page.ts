import { EventData, Observable, ObservableArray, Page } from '@nativescript/core'
import { AccessoryService } from './Models/AccessoryService'
import { Accessory } from './Models/Accessory'

var _AccessoryService: AccessoryService;

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new ViewModel()
}


class ViewModel extends Observable{
  private _Accessory: Accessory[]
  private number: number
  constructor(){
    super()
    
    this.number = 0
    _AccessoryService = new AccessoryService

    //this._Accessory = _AccessoryService.GetAccessories()
  }

  onTap(){
    _AccessoryService.GetAccessories()
    this._Accessory.forEach(element => {
      this.number++
      console.log(element.id)
      console.log(element.name)
      console.log(element.tag)
    });
    console.log("this is the amount of times its done " + this.number)
  }
}


  
  /*
  public items: ObservableArray<Accessory>
  this.items = new ObservableArray([
    new Accessory(1, "Skinke", "tilbehør"),
    new Accessory(2, "Skinke", "tilbehør"),
    new Accessory(3, "Skinke", "tilbehør"),
    new Accessory(4, "Skinke", "tilbehør"),
    new Accessory(5, "Skinke", "tilbehør"),
    new Accessory(6, "Skinke", "tilbehør"),
    new Accessory(7, "Skinke", "tilbehør"),
  ])
  */
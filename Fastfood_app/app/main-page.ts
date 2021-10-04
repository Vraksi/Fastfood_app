import { EventData, Observable, ObservableArray, Page } from '@nativescript/core'
import { AccessoryService } from './Models/AccessoryService'
import { Accessory } from './Models/Accessory'

var _AccessoryService: AccessoryService;

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new ViewModel()
}


class ViewModel extends Observable{
  private _Accessory: ObservableArray<Accessory>
  constructor(){
    super()

    _AccessoryService = new AccessoryService

     //_AccessoryService.GetAccessories()
  }

  onTap(){
    _AccessoryService.GetAccessories()
   
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
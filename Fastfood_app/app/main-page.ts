import { EventData, fromObject, ItemEventData, ListView, Observable, ObservableArray, Page } from '@nativescript/core'
import { AccessoryService } from './Models/AccessoryService'
import { Accessory } from './Models/Accessory'
import { Options } from './main-page-vm';

var _AccessoryService: AccessoryService;

let vm: Options = new Options();

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = vm;

}

export function showDialog(args: ItemEventData)
{ const index = args.index;
  vm.set('dialogShown', true);
}

export function closeDialog()
{  
  vm.set('dialogShown', false);
}

export function onListViewLoaded(args: EventData) {
  const listView = <ListView>args.object;
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
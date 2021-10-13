import { ViewModel } from './MainPageObs'
import { EventData, fromObject, ItemEventData, ListView, Observable, ObservableArray, Page, PropertyChangeData } from '@nativescript/core'
import { Options } from './main-page-vm';

//var _Accessory: Accessory[]

let vm: Options = new Options();

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = obs;
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

  //vi laver vores viewmodel om til en variable sådan at vi kan manipulere objektet vi laver
  var obs = new ViewModel()

  page.bindingContext = obs

  //Vi tænder for denne observable for at kunne kigge på data ændringer og agere ud fra den data.
  obs.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => {

    console.log(event.propertyName);
    console.log(event.value);
  })




export function showDialog(args: ItemEventData)
{ const index = args.index;
  this.obs.set('dialogShown', true);
}

export function closeDialog()
{  
  this.obs.set('dialogShown', false);
}

export function onListViewLoaded(args: EventData) {
  const listView = <ListView>args.object;
}

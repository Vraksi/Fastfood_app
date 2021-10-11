import { EventData, Observable, ObservableArray, Page, PropertyChangeData } from '@nativescript/core'
import { ViewModel } from './MainPageObs'

//var _Accessory: Accessory[]

export function navigatingTo(args: EventData) {
  const page = <Page>args.object

  //vi laver vores viewmodel om til en variable sådan at vi kan manipulere objektet vi laver
  var obs = new ViewModel()

  page.bindingContext = obs

  //Vi tænder for denne observable for at kunne kigge på data ændringer og agere ud fra den data.
  obs.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => {

    console.log(event.propertyName);
    console.log(event.value);
  })
}
import { EventData, Observable, ObservableArray, Page, PropertyChangeData } from '@nativescript/core'
import { ViewModel } from './MainPageObs'

//var _Accessory: Accessory[]

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  var obs = new ViewModel()

  page.bindingContext = obs

  obs.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => {
    
    console.log(event.propertyName);
    console.log(event.value);
  })
}
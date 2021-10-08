import { EventData, fromObject, ItemEventData, ListView, Observable, ObservableArray} from '@nativescript/core'


export class Options extends Observable
{
    public dialogShown = false;
    myTitles: any
    myOptions: any

    constructor(){
        super();

        this.myTitles = [
            { title: "The Da Vinci Code", desc: "lorem ipsum"},
            { title: "Harry Potter and the Chamber of Secrets", desc: "lorem ipsum"},
            { title: "The Alchemist" , desc: "lorem ipsum"},
            { title: "The Godfather" , desc: "lorem ipsum"},
            { title: "Goodnight Moon" , desc: "lorem ipsum"},
            { title: "The Hobbit" , desc: "lorem ipsum"},
            { title: "The Da Vinci Code2", desc: "lorem ipsum"},
            { title: "Harry Potter and the Chamber of Secrets2", desc: "lorem ipsum"},
            { title: "The Alchemist2" , desc: "lorem ipsum"},
            { title: "The Godfather2" , desc: "lorem ipsum"},
            { title: "Goodnight Moon2" , desc: "lorem ipsum"},
            { title: "The Hobbit2" , desc: "lorem ipsum"},
            { title: "The Da Vinci Code3", desc: "lorem ipsum"},
            { title: "Harry Potter and the Chamber of Secrets3", desc: "lorem ipsum"},
            { title: "The Alchemist3" , desc: "lorem ipsum"},
            { title: "The Godfather3" , desc: "lorem ipsum"},
            { title: "Goodnight Moon3" , desc: "lorem ipsum"},
            { title: "The Hobbit3" , desc: "lorem ipsum"}
        ],
        
        this.myOptions = [
            { title: "Skinke"},
            { title: "Mozzerella"},
            { title: "Pepperoni" },
            { title: "Parmesan"},
            { title: "Cocktailpølser"},
            { title: "Ansjoser"},
            { title: "Skinke2"},
            { title: "Mozzerella2"},
            { title: "Pepperoni2" },
            { title: "Parmesan2"},
            { title: "Cocktailpølser2"},
            { title: "Ansjoser2"}
        ]
    };
}
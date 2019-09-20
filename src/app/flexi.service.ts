import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlexiService {

 public flexiConfig: any;

  constructor() {
     this.flexiConfig = {
       items: [
       {
         "name": "Ishwar Singh Chouhan",
         "label": "Person's Name",
         "type": "TextField"
       },
       {
         "name": "states",
         "label": "Person's state",
         "type": "DropDown",
         "values": [
                 "Maharashtra",
                 "Kerala",
                 "Tamil Nadu"
               ]
       }]
   };
  }

  getFlexiConfig():any {
    return this.flexiConfig;
  }

}

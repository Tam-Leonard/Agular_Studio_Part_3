import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipmentItem: object): boolean {
    //console.log(equipmentItem); did this to check if function and event handler were working for button click event
    this.cargoHold.push(equipmentItem);
    this.cargoMass += equipmentItem['mass'];
    //alt this.cargoMass = this.cargoMass + equipmentItem.mass
    //also there was a red line under the word mass in ex above so the bracket handled that
   
    return this.cargoMass + 200 >= this.maximumAllowedMass;
    /* alt code for above:
     if (this.cargoMass + 200 >= this.maximumAllowedMass) {
      return true;
    } else {
      return false;
    } 
    return true;
   */
   }

   clearHold(){
    //clear cargoHold
    this.cargoHold = [];

    //reset cargoMass
    this.cargoMass = 0;
   }
}

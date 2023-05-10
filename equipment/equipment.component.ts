import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  toolBeingEdited: string;
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  

  constructor() { }

  ngOnInit() {
  }
  add(toolName: string) {
    for(let tool of this.equipment) {
      if (tool === toolName){
        return;
      }
    }
    this.equipment.push(toolName);
  }

  remove(tool: string) {
    let index = this.equipment.indexOf(tool);
    this.equipment.splice(index, 1);
  }

  edit(tool: string) {
    this.toolBeingEdited = tool;
 }

 save(name: string, tool: string) {
  let index = this.equipment.indexOf(tool);
  this.equipment[index] = name;
 }

}

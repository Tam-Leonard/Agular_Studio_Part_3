import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: string;

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  
  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    for(let experiment of this.experiments) {
      if (experiment === experimentName){
        return;
      }
    }
    this.experiments.push(experimentName);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
 }

 save(name: string, experiment: string) {
  let index = this.experiments.indexOf(experiment);
  this.experiments[index] = name;
 }
  
}

import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  constructor(private plantService: PlantsService) { }

  plants: Plant[] = [];

  getPlants(){
    this.plantService.getPlants().subscribe(plants =>
      this.plants = plants)
  }

  ngOnInit() {
    this.getPlants();
  }

}

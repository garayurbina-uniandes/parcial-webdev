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
  plantas_interior: number = 0;
  plantas_exterior: number = 0;

  getPlants(){
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.contarPlantasTipo();
    });
  }

  ngOnInit() {
    this.getPlants();
  }

  contarPlantasTipo(){
    this.plantas_interior = this.plants.filter(plant => plant.tipo === "Interior").length
    this.plantas_exterior = this.plants.filter(plant => plant.tipo === "Exterior").length
  }

}

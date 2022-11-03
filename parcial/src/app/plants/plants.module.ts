import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PlantsComponent, PlantListComponent],
  exports: [PlantsComponent, PlantListComponent]
})
export class PlantsModule { }

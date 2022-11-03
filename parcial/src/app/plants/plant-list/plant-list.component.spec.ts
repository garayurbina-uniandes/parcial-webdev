/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++){
      const plant : Plant = new Plant(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        "Interior",
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      );
      component.plants?.push(plant)
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 tr.dataRow elements and one table header', () => {
    expect(debug.queryAll(By.css('tr.table-dark'))).toHaveSize(1)
    expect(debug.queryAll(By.css('tr.dataRow'))).toHaveSize(3)
  });
});

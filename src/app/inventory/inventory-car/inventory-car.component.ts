import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory-car',
  imports: [FilterComponent, FormsModule],
  templateUrl: './inventory-car.component.html',
  styleUrl: './inventory-car.component.css'
})
export class InventoryCarComponent {
  autor = 'By Emmanuel Silano - exercise 04';
  mark = '';
 listCars = [
  {name : 'Toyota Corolla', price : 'Desde $21,550 (sedán)'},
  {name : 'Ford F-150', price : 'Desde $33,695 (pickup)'},
  {name : 'Volkswagen Golf GTI', price : 'Desde $31,685 (hatchback deportivo)'},
  {name : 'Honda Civic', price : 'Desde $23,950 (sedán).'},
  {name : 'Chevrolet Silverado 1500', price : 'Desde $36,800 (pickup).'},
 ];
 isFinded = false;
 searchPrice(value:string){
  this.mark = value;
  this.isFinded = true;
 }
 searchFinalised(data:boolean){
  this.isFinded = data;
 }
}

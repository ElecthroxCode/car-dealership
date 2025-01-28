import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Car{
  name:string;
  price:string;
}

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {
  
  @Input() cars:Car[] = [];
  @Input() markCar:string = '';
  @Output() isFinded:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  car:Car | undefined = undefined;
  findCar(name:string){
    name = name.trim();
    this.car = this.cars.find( (c) =>{
     return (c.name.toLowerCase() === name.toLowerCase());
    });
    this.isFinded.emit(false);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryCarComponent } from './inventory/inventory-car/inventory-car.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InventoryCarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}

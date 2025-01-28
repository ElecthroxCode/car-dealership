import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCarComponent } from './inventory-car.component';

describe('InventoryCarComponent', () => {
  let component: InventoryCarComponent;
  let fixture: ComponentFixture<InventoryCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

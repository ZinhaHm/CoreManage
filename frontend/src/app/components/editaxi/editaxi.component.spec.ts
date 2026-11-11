import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaxiComponent } from './editaxi.component';

describe('EditaxiComponent', () => {
  let component: EditaxiComponent;
  let fixture: ComponentFixture<EditaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaxiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

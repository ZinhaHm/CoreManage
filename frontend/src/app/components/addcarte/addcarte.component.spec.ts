import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarteComponent } from './addcarte.component';

describe('AddcarteComponent', () => {
  let component: AddcarteComponent;
  let fixture: ComponentFixture<AddcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

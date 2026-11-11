import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgarageComponent } from './editgarage.component';

describe('EditgarageComponent', () => {
  let component: EditgarageComponent;
  let fixture: ComponentFixture<EditgarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditgarageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditgarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

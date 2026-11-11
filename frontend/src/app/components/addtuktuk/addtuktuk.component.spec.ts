import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtuktukComponent } from './addtuktuk.component';

describe('AddtuktukComponent', () => {
  let component: AddtuktukComponent;
  let fixture: ComponentFixture<AddtuktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtuktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtuktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

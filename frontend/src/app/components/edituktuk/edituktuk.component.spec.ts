import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituktukComponent } from './edituktuk.component';

describe('EdituktukComponent', () => {
  let component: EdituktukComponent;
  let fixture: ComponentFixture<EdituktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdituktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdituktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

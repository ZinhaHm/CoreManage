import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuktukComponent } from './tuktuk.component';

describe('TuktukComponent', () => {
  let component: TuktukComponent;
  let fixture: ComponentFixture<TuktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TuktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

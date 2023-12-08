import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiNumberPickerComponent } from './multi-number-picker.component';

describe('MultiNumberPickerComponent', () => {
  let component: MultiNumberPickerComponent;
  let fixture: ComponentFixture<MultiNumberPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiNumberPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

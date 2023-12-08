import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiGenderPickerComponent } from './multi-gender-picker.component';

describe('MultiGenderPickerComponent', () => {
  let component: MultiGenderPickerComponent;
  let fixture: ComponentFixture<MultiGenderPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiGenderPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiGenderPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCasePickerComponent } from './multi-case-picker.component';

describe('MultiCasePickerComponent', () => {
  let component: MultiCasePickerComponent;
  let fixture: ComponentFixture<MultiCasePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiCasePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiCasePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

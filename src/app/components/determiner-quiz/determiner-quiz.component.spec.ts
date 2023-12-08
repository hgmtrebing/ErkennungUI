import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminerQuizComponent } from './determiner-quiz.component';

describe('DeterminerQuizComponent', () => {
  let component: DeterminerQuizComponent;
  let fixture: ComponentFixture<DeterminerQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeterminerQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeterminerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

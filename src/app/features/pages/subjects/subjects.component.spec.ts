import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesComponent } from './subjects.component';

describe('QuizzesComponent', () => {
  let component: QuizzesComponent;
  let fixture: ComponentFixture<QuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

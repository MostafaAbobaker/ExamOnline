import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinalExamComponent } from './dialog-final-exam.component';

describe('DialogFinalExamComponent', () => {
  let component: DialogFinalExamComponent;
  let fixture: ComponentFixture<DialogFinalExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFinalExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFinalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

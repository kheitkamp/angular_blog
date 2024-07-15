import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTutorial } from './angular-tutorial.component';

describe('TutorialContentComponent', () => {
  let component: AngularTutorial;
  let fixture: ComponentFixture<AngularTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTutorial]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularTutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkeTutorialComponent } from './gke-tutorial.component';

describe('GkeTutorialComponent', () => {
  let component: GkeTutorialComponent;
  let fixture: ComponentFixture<GkeTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GkeTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GkeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

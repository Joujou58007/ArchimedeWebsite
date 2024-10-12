import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidacyPageComponent } from './candidacy-page.component';

describe('CandidacyPageComponent', () => {
  let component: CandidacyPageComponent;
  let fixture: ComponentFixture<CandidacyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidacyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidacyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

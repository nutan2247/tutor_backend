import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLivesComponent } from './schedule-lives.component';

describe('ScheduleLivesComponent', () => {
  let component: ScheduleLivesComponent;
  let fixture: ComponentFixture<ScheduleLivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleLivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChoverCardComponent } from './app-chover-card.component';

describe('AppChoverCardComponent', () => {
  let component: AppChoverCardComponent;
  let fixture: ComponentFixture<AppChoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChoverCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorksComponent } from './completed-works.component';

describe('CompletedWorksComponent', () => {
  let component: CompletedWorksComponent;
  let fixture: ComponentFixture<CompletedWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

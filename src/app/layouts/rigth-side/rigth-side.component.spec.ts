import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthSideComponent } from './rigth-side.component';

describe('RigthSideComponent', () => {
  let component: RigthSideComponent;
  let fixture: ComponentFixture<RigthSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigthSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

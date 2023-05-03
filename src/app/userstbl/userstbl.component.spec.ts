import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstblComponent } from './userstbl.component';

describe('UserstblComponent', () => {
  let component: UserstblComponent;
  let fixture: ComponentFixture<UserstblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

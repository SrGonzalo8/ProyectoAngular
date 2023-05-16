import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusrgroupComponent } from './listusrgroup.component';

describe('ListusrgroupComponent', () => {
  let component: ListusrgroupComponent;
  let fixture: ComponentFixture<ListusrgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusrgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusrgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementadsComponent } from './managementads.component';

describe('ManagementadsComponent', () => {
  let component: ManagementadsComponent;
  let fixture: ComponentFixture<ManagementadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

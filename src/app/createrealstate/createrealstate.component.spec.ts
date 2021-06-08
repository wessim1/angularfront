import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterealstateComponent } from './createrealstate.component';

describe('CreaterealstateComponent', () => {
  let component: CreaterealstateComponent;
  let fixture: ComponentFixture<CreaterealstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterealstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterealstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

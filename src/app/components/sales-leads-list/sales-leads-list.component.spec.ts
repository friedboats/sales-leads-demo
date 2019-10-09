import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadsListComponent } from './sales-leads-list.component';

describe('SalesLeadsListComponent', () => {
  let component: SalesLeadsListComponent;
  let fixture: ComponentFixture<SalesLeadsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLeadsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLeadsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

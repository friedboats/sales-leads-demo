import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadsItemComponent } from './sales-leads-item.component';

describe('SalesLeadsItemComponent', () => {
  let component: SalesLeadsItemComponent;
  let fixture: ComponentFixture<SalesLeadsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLeadsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLeadsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

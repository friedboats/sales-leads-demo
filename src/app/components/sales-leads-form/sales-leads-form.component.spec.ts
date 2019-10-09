import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadsFormComponent } from './sales-leads-form.component';

describe('SalesLeadsFormComponent', () => {
  let component: SalesLeadsFormComponent;
  let fixture: ComponentFixture<SalesLeadsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLeadsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLeadsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

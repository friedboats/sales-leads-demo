import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadsPanelComponent } from './sales-leads-panel.component';

describe('SalesLeadsPanelComponent', () => {
  let component: SalesLeadsPanelComponent;
  let fixture: ComponentFixture<SalesLeadsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLeadsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLeadsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFlexTableComponent } from './poc-flex-table.component';

describe('FlexTableComponent', () => {
  let component: PocFlexTableComponent;
  let fixture: ComponentFixture<PocFlexTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocFlexTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocFlexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiongenericComponent } from './sectiongeneric.component';

describe('SectiongenericComponent', () => {
  let component: SectiongenericComponent;
  let fixture: ComponentFixture<SectiongenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiongenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectiongenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

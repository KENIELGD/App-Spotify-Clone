import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistheaderComponent } from './playlistheader.component';

describe('PlaylistheaderComponent', () => {
  let component: PlaylistheaderComponent;
  let fixture: ComponentFixture<PlaylistheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

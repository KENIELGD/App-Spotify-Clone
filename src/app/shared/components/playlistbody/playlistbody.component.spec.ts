import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistbodyComponent } from './playlistbody.component';

describe('PlaylistbodyComponent', () => {
  let component: PlaylistbodyComponent;
  let fixture: ComponentFixture<PlaylistbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistListItemComponent } from './gist-list-item.component';

describe('GistListItemComponent', () => {
  let component: GistListItemComponent;
  let fixture: ComponentFixture<GistListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

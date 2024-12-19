import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcarComponent } from './showcar.component';

describe('ShowcarComponent', () => {
  let component: ShowcarComponent;
  let fixture: ComponentFixture<ShowcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcarComponent]
    });
    fixture = TestBed.createComponent(ShowcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

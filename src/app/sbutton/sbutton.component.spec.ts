import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbuttonComponent } from './sbutton.component';

describe('SbuttonComponent', () => {
  let component: SbuttonComponent;
  let fixture: ComponentFixture<SbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbuttonComponent]
    });
    fixture = TestBed.createComponent(SbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

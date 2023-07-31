import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRenderComponent } from './image-render.component';

describe('ImageRenderComponent', () => {
  let component: ImageRenderComponent;
  let fixture: ComponentFixture<ImageRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageRenderComponent]
    });
    fixture = TestBed.createComponent(ImageRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

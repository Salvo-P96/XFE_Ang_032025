import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBuildComponent } from './custom-build.component';

describe('CustomBuildComponent', () => {
  let component: CustomBuildComponent;
  let fixture: ComponentFixture<CustomBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

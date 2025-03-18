import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRackComponent } from './button-rack.component';

describe('ButtonRackComponent', () => {
  let component: ButtonRackComponent;
  let fixture: ComponentFixture<ButtonRackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

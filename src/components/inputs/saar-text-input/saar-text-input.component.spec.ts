import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaarTextInputComponent } from './saar-text-input.component';

describe('SaarTextInputComponent', () => {
  let component: SaarTextInputComponent;
  let fixture: ComponentFixture<SaarTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaarTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaarTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

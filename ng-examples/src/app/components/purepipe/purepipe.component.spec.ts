import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurepipeComponent } from './purepipe.component';

describe('PurepipeComponent', () => {
  let component: PurepipeComponent;
  let fixture: ComponentFixture<PurepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurepipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

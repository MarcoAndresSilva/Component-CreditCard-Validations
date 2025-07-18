import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardFormComponent } from './creditcard-form.component';

describe('CreditcardFormComponent', () => {
  let component: CreditcardFormComponent;
  let fixture: ComponentFixture<CreditcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditcardFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

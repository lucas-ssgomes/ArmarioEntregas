import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEcommerceComponent } from './login-ecommerce.component';

describe('LoginEcommerceComponent', () => {
  let component: LoginEcommerceComponent;
  let fixture: ComponentFixture<LoginEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

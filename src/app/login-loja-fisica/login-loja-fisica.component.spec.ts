import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLojaFisicaComponent } from './login-loja-fisica.component';

describe('LoginLojaFisicaComponent', () => {
  let component: LoginLojaFisicaComponent;
  let fixture: ComponentFixture<LoginLojaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLojaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLojaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

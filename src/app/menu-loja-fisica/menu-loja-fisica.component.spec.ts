import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLojaFisicaComponent } from './menu-loja-fisica.component';

describe('MenuLojaFisicaComponent', () => {
  let component: MenuLojaFisicaComponent;
  let fixture: ComponentFixture<MenuLojaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLojaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLojaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

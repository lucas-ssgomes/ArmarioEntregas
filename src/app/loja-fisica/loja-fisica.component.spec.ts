import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaFisicaComponent } from './loja-fisica.component';

describe('LojaFisicaComponent', () => {
  let component: LojaFisicaComponent;
  let fixture: ComponentFixture<LojaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

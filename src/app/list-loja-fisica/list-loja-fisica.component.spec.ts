import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLojaFisicaComponent } from './list-loja-fisica.component';

describe('ListLojaFisicaComponent', () => {
  let component: ListLojaFisicaComponent;
  let fixture: ComponentFixture<ListLojaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLojaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLojaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

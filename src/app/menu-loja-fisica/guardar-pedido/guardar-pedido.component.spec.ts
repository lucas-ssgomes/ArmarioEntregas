import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarPedidoComponent } from './guardar-pedido.component';

describe('GuardarPedidoComponent', () => {
  let component: GuardarPedidoComponent;
  let fixture: ComponentFixture<GuardarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

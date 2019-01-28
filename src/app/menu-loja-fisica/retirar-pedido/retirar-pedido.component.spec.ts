import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarPedidoComponent } from './retirar-pedido.component';

describe('RetirarPedidoComponent', () => {
  let component: RetirarPedidoComponent;
  let fixture: ComponentFixture<RetirarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

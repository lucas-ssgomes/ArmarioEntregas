import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPedidosComponent } from './status-pedidos.component';

describe('StatusPedidosComponent', () => {
  let component: StatusPedidosComponent;
  let fixture: ComponentFixture<StatusPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

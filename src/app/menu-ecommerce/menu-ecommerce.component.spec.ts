import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEcommerceComponent } from './menu-ecommerce.component';

describe('MenuEcommerceComponent', () => {
  let component: MenuEcommerceComponent;
  let fixture: ComponentFixture<MenuEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

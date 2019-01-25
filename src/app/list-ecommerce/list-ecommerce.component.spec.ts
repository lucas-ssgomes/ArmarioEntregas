import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEcommerceComponent } from './list-ecommerce.component';

describe('ListEcommerceComponent', () => {
  let component: ListEcommerceComponent;
  let fixture: ComponentFixture<ListEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

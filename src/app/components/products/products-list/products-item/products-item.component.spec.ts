import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsItemComponent } from './products-item.component';

describe('ProductsItemComponent', () => {
  let component: ProductsItemComponent;
  let fixture: ComponentFixture<ProductsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsItemComponent]
    });
    fixture = TestBed.createComponent(ProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

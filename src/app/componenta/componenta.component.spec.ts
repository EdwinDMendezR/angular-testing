import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ComponentaComponent } from './componenta.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/product.model';
import { By } from '@angular/platform-browser';

describe('ComponentaComponent', () => {
  let component: ComponentaComponent;
  let fixture: ComponentFixture<ComponentaComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ComponentaComponent, ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentaComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component::products', () => {
    // Arrange
    component.products = [
      new Product('3333', 'CCCC'),
      new Product('4444', 'DDDD'),
      new Product('5555', 'EEEE')
    ];

    // Act
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('app-product'));
  
    // Assert
    expect(debugElements.length).toEqual(3);
  });

  it('component::products', () => {
    // Arrange
    const buttonDebugElement = fixture.debugElement.query(By.css('app-product .btn-output-testing'));
  
    // Act
    buttonDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(component.outputProduct?.id).toEqual('1111');
    expect(component.outputProduct?.name).toEqual('AAAA');

  });



});

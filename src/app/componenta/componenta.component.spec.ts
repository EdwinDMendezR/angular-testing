import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentaComponent } from './componenta.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/product.model';
import { By } from '@angular/platform-browser';
import { ProductsService } from '../product/product.service';
import { generateOneProduct } from '../product/product.mock';
import { of } from 'rxjs';
import { PipesPipe } from '../pipes/pipes.pipe';


describe('ComponentaComponent', () => {
  let component: ComponentaComponent;
  let fixture: ComponentFixture<ComponentaComponent>;
  let productsService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    const productsServiceSpy = jasmine.createSpyObj(
      'ProductsService', 
      [
        'getExampleService', 
        'getExampleParams'
      ]
    )
    await TestBed.configureTestingModule({
      declarations: [ ComponentaComponent, ProductComponent, PipesPipe ],
      providers: [
        { provide: ProductsService, useValue: productsServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentaComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    const mockData: Product[] = [
      {
          ...generateOneProduct(),
          id: '1'
      },
      {
          ...generateOneProduct(),
          id: '2'
      }
    ];
    productsService.getExampleService.and.returnValue(of(mockData));
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

  it('ProductsService::getExampleService', () => {
    expect(productsService.getExampleService).toHaveBeenCalled();
  });

});

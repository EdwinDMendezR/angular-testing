import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from './product.model';
import { ProductsService } from './product.service';
import { generateOneProduct } from './product.mock';
import { PipesPipe } from '../pipes/pipes.pipe';
import { asyncData, asyncError, mockObservable, mockPromise, query, queryById } from 'src/testing';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productsService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    mockPromise
    const productsServiceSpy = jasmine.createSpyObj('ProductsService', 
      ['getExampleService', 'getExampleParams', 'getPromiseValue']
    );
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent, PipesPipe ],
      providers: [
        { provide: ProductsService, useValue: productsServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
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
    productsService.getExampleService.and.returnValue(mockObservable(mockData));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('product.component.html::p', () => {
    const productElement: HTMLElement = fixture.nativeElement;
    const text = productElement.querySelector('p')
    expect(text?.textContent).toEqual('product works!')
  });

  it('product.component.html::DebugElement', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const pDebug: DebugElement = debugElement.query(By.css('p'));
    const productElement: HTMLElement = pDebug.nativeElement;
    expect(productElement?.textContent).toEqual('product works!')
  });

  
  it('component.product', () => {
    component.product = new Product('idValue', 'nameValue');
    expect(component.product.id).toEqual('idValue')
    expect(component.product.name).toEqual('nameValue')
  });

  it('product.component.html::DebugElement', () => {
    // Arrange
    component.product = new Product('idValue', 'nameValue');
    const debugElement: DebugElement = fixture.debugElement;
    const pDebug: DebugElement = debugElement.query(By.css('h1'));
    const productElement: HTMLElement = pDebug.nativeElement;
   
    // Act
    fixture.detectChanges();
   
    // Assert
    expect(productElement?.textContent).toEqual(`Id: ${component.product.id}`)
  });

  it('component::actionClick', () => {
    // Arrange

    // Act
    component.actionClick();
    fixture.detectChanges();

    // Assert
    expect(component.mensaje).toEqual('Mensaje-Click');
  });

  it('product.component.html::button', () => {
    // Arrange
    const button = queryById(fixture, 'btn-testing').nativeElement;

    // Act
    component.actionClick();
    fixture.detectChanges();

    // Assert
    expect(button.textContent).toEqual('Mensage: Mensaje-Click');
  });

  it('product.component.html::button', () => {
    // Arrange
    const button = queryById(fixture,'btn-testing');
    const messageButton = button.nativeElement;

    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(messageButton.textContent).toEqual('Mensage: Mensaje-Click');
  });

  it('component::actionOutPutClick', () => {
    // Arrange
    const expectPErson = new Product('idValue', 'nameValue') 
    component.product = expectPErson;
    const button = query(fixture, 'button.btn-output-testing');

    let product_output : Product | undefined;
    component.outputProduct.subscribe(person => {
      product_output = person;
    })

    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(product_output).toEqual(expectPErson);
  });

  it('ProductComponent::getAllProductsPaginacion', () => {
    // Arrange
    const mockDataDos: Product[] = [
      {
          ...generateOneProduct(),
          id: '1'
      },
      {
          ...generateOneProduct(),
          id: '2'
      },
      {
          ...generateOneProduct(),
          id: '3'
      },
      {
          ...generateOneProduct(),
          id: '4'
      }
    ];
    productsService.getExampleParams.and.returnValue(mockObservable(mockDataDos));
    const countPrev = component.products.length
    
    // Act
    component.getAllProductsPaginacion();
    fixture.detectChanges();

    // Assert
    expect(component.status).toEqual('success');
  })

  it('ProductComponent::getAllProductsPaginacion::Defer', fakeAsync(() => {
    // Arrange
    const mockDataDos: Product[] = [
      {
          ...generateOneProduct(),
          id: '1'
      },
      {
          ...generateOneProduct(),
          id: '2'
      },
      {
          ...generateOneProduct(),
          id: '3'
      },
      {
          ...generateOneProduct(),
          id: '4'
      }
    ];
    productsService.getExampleParams.and.returnValue(asyncData(mockDataDos));
    const countPrev = component.products.length
    
    // Act
    component.getAllProductsPaginacion();
    fixture.detectChanges();
    expect(component.status).toEqual('loading');

    tick(); // ejecutar todo lo que este pendinete -> promise, exec, obs, setTiemout [Asincrono] -> requiere fakeasync
    fixture.detectChanges();
    // Assert
    expect(component.status).toEqual('success');
  }));


  it('ProductComponent::getAllProductsPaginacion::Defer::SetTimeOut', fakeAsync(() => {
    // Arrange
    productsService.getExampleParams.and.returnValue(asyncError('error'));
    const countPrev = component.products.length
    
    // Act
    component.getAllProductsPaginacion();
    fixture.detectChanges();
    expect(component.status).toEqual('loading');

    tick(4000); // ejecutar todo lo que este pendinete -> promise, exec, obs, setTiemout [Asincrono] -> requiere fakeasync
    fixture.detectChanges();
    // Assert
    expect(component.status).toEqual('error');
  }));


  it('ProductComponent::callPromise', fakeAsync(() => {
    // Arrange
    productsService.getPromiseValue.and.returnValue(Promise.resolve('Mock Value'))

    // Act
    component.callPromise();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.respuesta).toEqual('Mock Value');

  }));


  it('ProductComponent::callPromise::Button', fakeAsync(() => {
    // Arrange
    productsService.getPromiseValue.and.returnValue(Promise.resolve('Mock Value'))
    const button = query(fixture, '.btn-promise');

    // Act
    button.triggerEventHandler('click', null)
    tick();
    fixture.detectChanges();
    const p_respuesta = query(fixture, '.p-respuesta')

    // Assert
    expect(component.respuesta).toEqual('Mock Value');
    expect(p_respuesta.nativeElement.textContent).toEqual('Mock Value');

  }));

  it('Pipes', () => {
    // Arrange
    const p_respuesta = query(fixture, '.pipe-clase');

    // Act
    // Assert
    expect(p_respuesta.nativeElement.textContent).toEqual('epiP gnitseT');
  });


});



@Component({
  template: `<app-product [product]="product" ></app-product>`
})
class HostComponent {
  product = new Product('idValue', 'nameValue');
}

describe('ProductComponent::HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HostComponent, ProductComponent, PipesPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('HostComponent::input', () => {
    // Arrange
    const id_value_debug_element = query(fixture, 'app-product h1');
    const id_value_native_elemente = id_value_debug_element.nativeElement;
    // Act
    fixture.detectChanges();
    // Assert
    expect(id_value_native_elemente.textContent).toEqual('Id: idValue');
  });

  it('HostComponent::input', () => {
    // Arrange
    const id_value_debug_element = query(fixture, 'app-product h1');
    const id_value_native_elemente = id_value_debug_element.nativeElement;
    // Act
    fixture.detectChanges();
    // Assert
    expect(id_value_native_elemente.textContent).toEqual('Id: idValue');
  });

});
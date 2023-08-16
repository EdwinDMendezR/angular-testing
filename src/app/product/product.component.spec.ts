import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from './product.model';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
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
    const button = fixture.debugElement.query(By.css('button.btn-testing')).nativeElement;

    // Act
    component.actionClick();
    fixture.detectChanges();

    // Assert
    expect(button.textContent).toEqual('Mensage: Mensaje-Click');
  });

  it('product.component.html::button', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('button.btn-testing'));
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
    const button = fixture.debugElement.query(By.css('button.btn-output-testing'));

    let product_output : Product | undefined;
    component.output.subscribe(person => {
      product_output = person;
    })

    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(product_output).toEqual(expectPErson);
  });


});

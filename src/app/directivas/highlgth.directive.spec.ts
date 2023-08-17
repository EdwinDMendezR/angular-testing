import { Component } from '@angular/core';
import { HighlgthDirective } from './highlgth.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


@Component({
  template: `
  <h5 highlight>Ejemplo Directiva 1</h5>
  <h5 highlight="yellow">Ejemplo Directiva 2</h5>
  <p highlight>Ejemplo Directiva 3</p>
`
})
class HostComponent {
}

fdescribe('HighlgthDirective', () => {

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, HighlgthDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create an instance', () => {
    expect(component).toBeTruthy();
  
  });

  it('By.css(*[highlight])', () => {
    const elements = fixture.debugElement.queryAll(By.css('*[highlight]'));
    expect(elements.length).toEqual(3);
  });

  it('By.directive(HighlgthDirective)', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighlgthDirective));
    expect(elements.length).toEqual(3);
  });

  it('*:not([highlight])', () => {
    const elements = fixture.debugElement.queryAll(By.css('*:not([highlight])'));
    expect(elements.length).toEqual(0);
  });

  it('By.directive(HighlgthDirective)::ValidaColor', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighlgthDirective));
    expect(elements[0].nativeElement.style.backgroundColor).toEqual('gray')
    expect(elements[1].nativeElement.style.backgroundColor).toEqual('yellow')
    expect(elements[2].nativeElement.style.backgroundColor).toEqual('gray')
    expect(elements.length).toEqual(3);
  });


});

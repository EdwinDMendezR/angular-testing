import { Component } from '@angular/core';
import { HighlgthDirective } from './highlgth.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { queryAll, queryAllByDirective } from 'src/testing';


@Component({
  template: `
  <h5 highlight>Ejemplo Directiva 1</h5>
  <h5 highlight="yellow">Ejemplo Directiva 2</h5>
  <p highlight>Ejemplo Directiva 3</p>
  <input [(ngModel)]="color" highlight> 
`
})
class HostComponent {
  color = 'pink'
}

describe('HighlgthDirective', () => {

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, HighlgthDirective ],
      imports: [ FormsModule, ReactiveFormsModule ]
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
    const elements = queryAll(fixture,'*[highlight]');
    expect(elements.length).toEqual(4);
  });

  it('By.directive(HighlgthDirective)', () => {
    const elements = queryAllByDirective(fixture, HighlgthDirective);
    expect(elements.length).toEqual(4);
  });

  it('*:not([highlight])', () => {
    const elements = queryAll(fixture,'*:not([highlight])');
    expect(elements.length).toEqual(0);
  });

  it('By.directive(HighlgthDirective)::ValidaColor', () => {
    const elements = queryAllByDirective(fixture, HighlgthDirective);
    expect(elements[0].nativeElement.style.backgroundColor).toEqual('gray')
    expect(elements[1].nativeElement.style.backgroundColor).toEqual('yellow')
    expect(elements[2].nativeElement.style.backgroundColor).toEqual('gray')
    expect(elements.length).toEqual(4);
  });

  /*it('fixture.detectChanges', ()=> {
    const inputDebugElement = fixture.debugElement.query(By.css('input'));
    const inputHtmlElement: HTMLInputElement = inputDebugElement.nativeElement;
    expect(inputHtmlElement.style.backgroundColor).toEqual('pink');
    inputHtmlElement.value = 'red';
    inputHtmlElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputHtmlElement.style.backgroundColor).toEqual('red');
    expect(component.color).toEqual('red');
  })*/

});

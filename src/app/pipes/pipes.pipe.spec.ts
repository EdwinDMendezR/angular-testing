import { Component } from '@angular/core';
import { PipesPipe } from './pipes.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('PipesPipe', () => {
  it('create an instance', () => {
    const pipe = new PipesPipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe.transform', () => {
    const pipe = new PipesPipe();
    const respuesta = pipe.transform('testing');
    expect(respuesta).toEqual('gnitset');
  })

});


@Component({
  template: `
  <h5>{{ 'Testing' | pipes }}</h5>
  <input [(ngModel)]="text">
  <p>{{ text | pipes }}</p> 
`
})
class HostComponent {
  text = ''
}

describe('PipesPipe::HostComponent', () => {

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostComponent, PipesPipe ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('pipe.transform', () => {
    const h5_elements = fixture.debugElement.query(By.css('h5'));
    expect(h5_elements.nativeElement.textContent).toEqual('gnitseT');
  })

  it('pipe.transform', () => {
    const input_debugelment = fixture.debugElement.query(By.css('input'));
    const input_nativeelement: HTMLInputElement = input_debugelment.nativeElement;
    const p_elment = fixture.debugElement.query(By.css('p'));
    expect(p_elment.nativeElement.textContent).toEqual('');
    input_nativeelement.value = 'Tesintg input';
    input_nativeelement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(p_elment.nativeElement.textContent).toEqual('tupni gtniseT');
  })

});

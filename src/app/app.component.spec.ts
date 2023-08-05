import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Service } from './service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
  }); **/

  describe('Test Service', () => {
    it('#methodUno', () => {
        // Arrange
        const service = new Service();

        //Act
        const resultado = service.methodUno("message");

        //Assert
        expect(resultado).toEqual("message::methodUno");

    })

  it('#methodDos', () => {
    let name = 'EM';
    let lastname;
    expect(name).toBeDefined();
    expect(lastname).toBeUndefined();
    expect(1 === 1).toBeTruthy();
    expect(1 === 1 + 1).toBeFalsy();
    expect(5).toBeLessThan(10);
    expect(5).toBeGreaterThan(1);
    expect('123456').toMatch(/12/);
    expect(['a', 'b']).toContain('b');
  })


});


});

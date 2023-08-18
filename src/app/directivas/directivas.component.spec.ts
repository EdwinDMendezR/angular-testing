import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasComponent } from './directivas.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


describe('DirectivasComponent', () => {
  let component: DirectivasComponent;
  let fixture: ComponentFixture<DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

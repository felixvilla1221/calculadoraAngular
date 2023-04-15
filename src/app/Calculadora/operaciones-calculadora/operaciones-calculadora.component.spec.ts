import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesCalculadoraComponent } from './operaciones-calculadora.component';

describe('OperacionesCalculadoraComponent', () => {
  let component: OperacionesCalculadoraComponent;
  let fixture: ComponentFixture<OperacionesCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionesCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

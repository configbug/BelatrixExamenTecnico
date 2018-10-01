import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiomonedaComponent } from './cambiomoneda.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CambiomonedaService } from './shared/cambiomoneda.service';
import { DataService } from '../../core/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';


describe('CambiomonedaComponent', () => {
  let component: CambiomonedaComponent;
  let fixture: ComponentFixture<CambiomonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CambiomonedaComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [CambiomonedaService, DataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiomonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se creó correctamente el componente CambioMoneda', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de mostrar el valor en el input dolar', () => {

    component.formGroupCambioMoneda.patchValue({ valueDolar: 36 });
    component.obtainCurrency();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input')).nativeElement;
      debugger;
      console.log(input);

      expect(input.value).toBe('36.00');
    });
  });

  it('Debe de crear un formulario con dos campos', () => {
    // TODO : Revisar valores en campos deshabilitados
    expect(component.formGroupCambioMoneda.contains('valueDolar')).toBeTruthy();
    expect(component.formGroupCambioMoneda.contains('valueEuro')).toBeFalsy();
    
  });

  it('El campo Dolar debe ser obligatorio', () => {

    const control = component.formGroupCambioMoneda.get('valueDolar');
    control.setValue('');    
    expect(control.valid).toBeFalsy();
    
  });

  it('El campo Dolar debe ser un valor valido', () => {

    const control = component.formGroupCambioMoneda.get('valueDolar');
    control.setValue('345.6789');    
    expect(control.valid).toBeTruthy();
    
  });

});

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { CambiomonedaService } from './shared/cambiomoneda.service';

@Component({
  selector: 'app-cambiomoneda',
  templateUrl: './cambiomoneda.component.html',
  styleUrls: ['./cambiomoneda.component.scss']
})
export class CambiomonedaComponent implements OnInit {

  amount: number;
  amountConvert: string;
  sourceCurrency: any;
  formGroupCambioMoneda: FormGroup;

  constructor(public fb: FormBuilder, private cambiomonedaService: CambiomonedaService) { }

  ngOnInit() {
    this.setValuesFormBuilder();
  }

  private setValuesFormBuilder() {
    this.formGroupCambioMoneda = new FormGroup({
      valueDolar: new FormControl({ value: '', disabled: false }, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+\.?\d{0,4}$/)
      ])),
      valueEuro: new FormControl({ value: '', disabled: true })
    });
  }

  public obtainCurrency(): void {
    //TODO : Crear un Loading Service
    if (this.formGroupCambioMoneda.valid) {
      this.amount = this.formGroupCambioMoneda.get('valueDolar').value;
      this.formGroupCambioMoneda.patchValue({ valueDolar: Number(this.amount).toFixed(2) });

      this.cambiomonedaService.getMoneda()
        .subscribe(res => {
          this.sourceCurrency = res;
          //TODO : Crear un Model del Response
          let cambio: number = this.sourceCurrency.rates.EUR;
          this.amountConvert = String(Number(Number(this.formGroupCambioMoneda.get('valueDolar').value) * cambio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
          this.formGroupCambioMoneda.patchValue({ valueEuro: this.amountConvert });

        },
          error => {
            //TODO : Crear un Error Service
            throw error;
          },
          () => {

          });
    }
    else{
      return;
    }
  }

}

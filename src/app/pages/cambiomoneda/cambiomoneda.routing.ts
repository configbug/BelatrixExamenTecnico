
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiomonedaComponent }    from './cambiomoneda.component';

const PARAMETRO_ROUTES: Routes = [
  { path: 'CambioMoneda', component: CambiomonedaComponent }
];

export const ROUTABLE_COMPONENTS = [
];

@NgModule({
  imports: [
    RouterModule.forChild(PARAMETRO_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class CambiomonedaRoutingModule {}

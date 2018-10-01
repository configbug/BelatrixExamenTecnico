import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CambiomonedaRoutingModule, ROUTABLE_COMPONENTS } from './cambiomoneda.routing';

import { CambiomonedaComponent } from './cambiomoneda.component';


import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';

import { CambiomonedaService } from './shared/cambiomoneda.service';


@NgModule({
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, CommonModule,
        BrowserModule, HttpModule,
        CambiomonedaRoutingModule,
        HeaderModule, FooterModule
    ],
    entryComponents: [],
    exports: [],
    declarations: [
        ROUTABLE_COMPONENTS,
        CambiomonedaComponent
    ],
    providers: [CurrencyPipe, CambiomonedaService],
    bootstrap: []
})
export class CambiomonedaModule {
}

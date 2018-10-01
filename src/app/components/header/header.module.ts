import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MainmenuComponent } from '../mainmenu/mainmenu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    entryComponents: [],
    exports: [
        HeaderComponent,
        MainmenuComponent
    ],
    declarations: [
        HeaderComponent,
        MainmenuComponent
    ],
    providers: [],
    bootstrap: []
})
export class HeaderModule {
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'CambioMoneda', pathMatch: 'full' }
    //{ path: 'Seguridad/404', component: NotFoundComponent },
    //{path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                //enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.errorHandler = (error: any) => {
            debugger;
            this.router.navigate(['Seguridad/404']); // or redirect to default route
        }
      }
 }
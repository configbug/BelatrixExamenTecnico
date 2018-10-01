import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { DataService } from '../../../core/service/data.service';

@Injectable()
export class CambiomonedaService {
    constructor(private dataService: DataService) { }

    cambioMonedaUrl: string = '/api/latest';
    cambioMonedaUrl2: string = '/latest';

    getMoneda(): any {

        let parameters = new HttpParams();
        //parameters = parameters.append("access_key", String('8b7a09eb4cdf6a2183fbcf92664b43ec'));
        parameters = parameters.append("base", String('USD'));
        //parameters = parameters.append("symbols", String('EUR'));

        this.dataService.set(this.cambioMonedaUrl2);
        return this.dataService.execGetJson(parameters);
    }

}

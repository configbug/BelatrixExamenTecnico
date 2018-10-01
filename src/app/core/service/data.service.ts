import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable()
export class DataService {
    public _baseUri: string;

    private headers = new HttpHeaders({ 
        "Content-Type": "application/x-www-form-urlencoded"
     });

    constructor(private http: HttpClient) { }
    
    set(baseUri: string, pageSize?: number): void {
        this._baseUri = environment.serviceUrl2 + baseUri;
    }

    execPostJson(data?: any): any {
        return this.http.post(this._baseUri, data, { headers: this.headers });
    }

    execGetJson(data?: any): any {
        return this.http.get(this._baseUri, { params: data, headers: this.headers });
    }
    
    execPutJson(data?: any): any {
        return this.http.put(this._baseUri, data, { headers: this.headers });
    }

    execDeleteJson(data?: any): any {
        return this.http.delete(this._baseUri, { headers: this.headers, params: data })
    }
}

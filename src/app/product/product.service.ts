import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private apiUrl = `${environment.API_URL}/api/products`;

    constructor(private http: HttpClient) { }

    getExampleService() {
        return this.http.get<Product[]>(`${this.apiUrl}`);
    }

}
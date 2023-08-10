import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "./product.model";
import { map, retry } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private apiUrl = `${environment.API_URL}/api/products`;

    constructor(private http: HttpClient) { }

    getExampleService() {
        return this.http.get<Product[]>(`${this.apiUrl}`);
    }

    getExampleParams(limit?: number, offset?: number) {
        let params = new HttpParams();
        if(limit && offset != null) {
            params = params.set('limit', limit);
            params = params.set('offset', offset);
        }

        return this.http.get<Product[]>(`${this.apiUrl}`, {params})
        .pipe(
            retry(3),
            map(products => products.map(item => {
                return {
                    ...item,
                    name: item.name + '::Modify'    
                }
            }))
        )
        ;

    }

    postExample(product: Product) {
        return this.http.post<Product>(`${this.apiUrl}`, product)
    }

    putExample(id: String, product: Product) {
        return this.http.put<Product>(`${this.apiUrl}/${id}`, product)
    }

    deleteExample(id: String) {
        return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
    }

}
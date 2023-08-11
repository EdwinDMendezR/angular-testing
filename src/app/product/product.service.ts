import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from "@angular/common/http";
import { Product } from "./product.model";
import { catchError, map, retry } from "rxjs/operators";
import { throwError } from "rxjs";

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

    exceptionExample(id: String) {
        return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
            .pipe(
                catchError( (error: HttpErrorResponse) => {
                    if(error.status === HttpStatusCode.Conflict) {
                        return throwError(() => 'HttpStatusCode::Conflict');
                    }
                    if(error.status === HttpStatusCode.NotFound) {
                        return throwError(() => 'HttpStatusCode::NotFound');
                    }
                    if(error.status === HttpStatusCode.Unauthorized) {
                        return throwError(() => 'HttpStatusCode::Unauthorized');
                    }
                    return throwError(() => 'DefaultError');
                })
            )
    }

}
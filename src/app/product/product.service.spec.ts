import { TestBed } from '@angular/core/testing';
import { ProductsService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from './product.model';
import { environment } from '../environment';

describe('Product Service', () => {

    let productService: ProductsService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProductsService
            ]
        })
        .compileComponents();

        productService = TestBed.inject(ProductsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })


    it('Validar Instancia de ProductService', () => {
        expect(productService).toBeTruthy();
    });

    describe('get all', () => {
        
        it('List', (doneFunction) => {

            productService.getExampleService()
            .subscribe((productResponse) => {
                expect(productResponse).toEqual(mockData)
            })
            doneFunction();

            // Mock
            const mockData: Product[] = [
                {
                    id: '1',
                    name: 'name'
                }
            ];
            const url = `${environment.API_URL}/api/products`; 
            const request = httpTestingController.expectOne(url);
            request.flush(mockData)
            httpTestingController.verify();
        });
    })


});
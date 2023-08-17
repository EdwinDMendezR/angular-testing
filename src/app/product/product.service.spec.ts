import { TestBed } from '@angular/core/testing';
import { ProductsService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from './product.model';
import { environment } from '../environment';
import { generateOneProduct } from './product.mock';
import { HttpStatusCode } from '@angular/common/http';

describe('Product Service', () => {

    let productService: ProductsService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProductsService
            ]
        }).compileComponents();
        productService = TestBed.inject(ProductsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    afterEach(() => {
        httpTestingController.verify();
    })

    it('Validar Instancia de ProductService', () => {
        expect(productService).toBeTruthy();
    });

    describe('ProductService::getExampleService', () => {
        it('List', (doneFunction) => {
            productService.getExampleService()
                .subscribe((productResponse) => {
                    expect(productResponse).toEqual(mockData)
                })
            doneFunction();
            // Mock
            const mockData: Product[] = [generateOneProduct()];
            const url = `${environment.API_URL}/api/products`;
            const request = httpTestingController.expectOne(url);
            request.flush(mockData)
        });
    })


    describe('ProductService::getExampleParams', () => {
        it('List', (doneFunction) => {
            productService.getExampleParams()
                .subscribe((productResponse) => {
                    expect(productResponse[0].name).toEqual('name::Modify');
                    expect(productResponse[0].id).toEqual('1');
                })
            doneFunction();
            // Mock
            const mockData: Product[] = [
                {
                    ...generateOneProduct(),
                    id: '1'
                },
                {
                    ...generateOneProduct(),
                    id: '2'
                }
            ];
            const url = `${environment.API_URL}/api/products`;
            const request = httpTestingController.expectOne(url);
            request.flush(mockData)
        });
    })


    describe('ProductService::getExampleParams::Params', () => {
        it('List', (doneFunction) => {
            const limit = 10;
            const offset = 5;
            productService.getExampleParams(limit, offset)
                .subscribe((productResponse) => {
                    expect(productResponse[0].name).toEqual('name::Modify');
                    expect(productResponse[0].id).toEqual('1');
                })
            doneFunction();
            // Mock
            const mockData: Product[] = [
                {
                    ...generateOneProduct(),
                    id: '1'
                },
                {
                    ...generateOneProduct(),
                    id: '2'
                }
            ];
            const url = `${environment.API_URL}/api/products?limit=${limit}&offset=${offset}`;
            const request = httpTestingController.expectOne(url);
            request.flush(mockData)
        });
    })

    describe('ProductService::postExample', () => {
        it('post', (doneFunction) => {
            const productDto: Product = {
                ...generateOneProduct(),
                id: '1'
            }
            productService.postExample(productDto)
                .subscribe(response => {
                    expect(response).toEqual(mockData);
                });
            doneFunction();
            // Mock
            const mockData: Product = {
                ...generateOneProduct(),
                id: '1'
            };
            const url = `${environment.API_URL}/api/products`;
            const request = httpTestingController.expectOne(url);
            expect(request.request.body).toEqual(productDto);
            expect(request.request.method).toEqual('POST');
            request.flush(mockData)
        });
    })

    describe('ProductService::putExample', () => {
        it('post', (doneFunction) => {
            const productDtoUpdate: Product = {
                ...generateOneProduct(),
                id: '1'
            }
            const productId = '1';
            productService.putExample('1', productDtoUpdate)
                .subscribe(response => {
                    expect(response).toEqual(mockData);
                });
            doneFunction();
            // Mock
            const mockData: Product = {
                ...generateOneProduct(),
                id: '1'
            };
            const url = `${environment.API_URL}/api/products/${productId}`;
            const request = httpTestingController.expectOne(url);
            expect(request.request.body).toEqual(productDtoUpdate);
            expect(request.request.method).toEqual('PUT');
            request.flush(mockData)
        });
    })

    
    describe('ProductService::deleteExample', () => {
        it('post', (doneFunction) => {
            const mockData = true;
            const productId = '1';
            productService.deleteExample('1')
                .subscribe(response => {
                    expect(response).toEqual(mockData);
                });
            doneFunction();
            // Mock
            const url = `${environment.API_URL}/api/products/${productId}`;
            const request = httpTestingController.expectOne(url);
            expect(request.request.method).toEqual('DELETE');
            request.flush(mockData)
        });
    })

    describe('ProductService::exceptionExample', () => {
        it('post', (doneFunction) => {
            const mockData = true;
            const productId = '1';
            productService.exceptionExample('1')
                .subscribe(response => {
                    expect(response).toEqual(mockData);
                });
            doneFunction();
            // Mock
            const url = `${environment.API_URL}/api/products/${productId}`;
            const request = httpTestingController.expectOne(url);
            expect(request.request.method).toEqual('DELETE');
            request.flush(mockData)
        });
    })

    describe('ProductService::exceptionExample::Conflict', () => {
        it('post', (doneFunction) => {
            const mockData = true;
            const errorMessage = '404 Error Message';
            const mockError = {
                status: HttpStatusCode.Conflict,
                statusText: errorMessage
            }

            const productId = '1';
            productService.exceptionExample('1')
                .subscribe(null, (error) => {
                    expect(error).toEqual('HttpStatusCode::Conflict');
                });
            doneFunction();
            // Mock
            const url = `${environment.API_URL}/api/products/${productId}`;
            const request = httpTestingController.expectOne(url);
            expect(request.request.method).toEqual('DELETE');
            request.flush(errorMessage, mockError)
        });
    })

    it('ProductsService:', async () => {
        const respuesta = await productService.getPromiseValue();
        expect(respuesta).toEqual('Promise Value');
    });


});
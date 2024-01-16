import { ComponentFixture } from "@angular/core/testing";
import { query, queryById } from "./finders";

export function 
clickEvent<T>(
    fixture: ComponentFixture<T>, 
    selector: string, 
    withTestId: boolean = false,
    event: unknown = null
) {
    let element;
    if(withTestId) {
        element = queryById(fixture, selector);
    } else {
        element = query(fixture, selector);
    }
    element.triggerEventHandler('click', null);
}

export function 
clickElment<T>(
    fixture: ComponentFixture<T>, 
    selector: string, 
    withTestId: boolean = false,
    event: unknown = null
) {
    let elementDegug;
    if(withTestId) {
        elementDegug = queryById(fixture, selector);
    } else {
        elementDegug = query(fixture, selector);
    }
    const element: HTMLElement = elementDegug.nativeElement;
    element.click();
}

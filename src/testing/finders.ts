import { Type } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";


export function query<T>(fixture: ComponentFixture<T>, selector: string) {
    const element = fixture.debugElement.query(By.css(selector));
    if(!element) {
        throw new Error(`query: Element with ${selector} no existe`);
    }
    return fixture.debugElement.query(By.css(selector));
}

export function queryById<T>(fixture: ComponentFixture<T>, idElement: string) {
    return fixture.debugElement.query(By.css(`[data-testid="${idElement}"]`));
}

export function queryAll<T>(fixture: ComponentFixture<T>, selector: string) {
    return fixture.debugElement.queryAll(By.css(selector));
}

export function queryAllByDirective<T, D>(fixture: ComponentFixture<T>, directive: Type<D>) {
    return fixture.debugElement.queryAll(By.directive(directive));
}

export function getNativeElement<T>(fixture: ComponentFixture<T>, selector: string) {
    return HTMLElement = queryById(fixture, selector).nativeElement; 
}

export function getText<T>(fixture: ComponentFixture<T>, selector: string) {
    return HTMLElement = queryById(fixture, selector).nativeElement.textContent; 
}
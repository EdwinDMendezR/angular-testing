import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { query, queryById } from "./finders";

export function setInputValue<T>(
    fixture: ComponentFixture<T>, 
    selector: string, 
    value: string,
    withTestId: boolean = false) {
    let debugElement: DebugElement;
    if(withTestId) {
        debugElement = queryById(fixture, selector);
    } else {
        debugElement = query(fixture, selector);
    }
    const inputElment: HTMLInputElement = debugElement.nativeElement;
    inputElment.value = value;
    inputElment.dispatchEvent(new Event('input'));
    inputElment.dispatchEvent(new Event('blur'));
}

export function setCheckBoxValue<T>(
    fixture: ComponentFixture<T>, 
    selector: string, 
    value: boolean,
    withTestId: boolean = false) {
    let debugElement: DebugElement;
    if(withTestId) {
        debugElement = queryById(fixture, selector);
    } else {
        debugElement = query(fixture, selector);
    }
    const inputElment: HTMLInputElement = debugElement.nativeElement;
    inputElment.checked = value;
    inputElment.dispatchEvent(new Event('change'));
    inputElment.dispatchEvent(new Event('blur'));
}
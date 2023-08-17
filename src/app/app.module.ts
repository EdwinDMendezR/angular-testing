import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProgrammingComponent } from './functional/programming/programming.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { HighlgthDirective } from './directivas/highlgth.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProgrammingComponent,
    ComponentaComponent,
    DirectivasComponent,
    HighlgthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

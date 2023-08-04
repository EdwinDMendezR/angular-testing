import { Component } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

  ngOnInit() {
  
    const service = new Service();
    const respuesta = service.methodUno("messages");

  }


}

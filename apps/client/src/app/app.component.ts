import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  standalone: true,
  imports: [RouterModule, ModalComponent, ButtonComponent, HttpClientModule],
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  data: any;
  constructor(private readonly http: HttpClient) {}
  submit() {
    const observable = this.http.get('http://localhost:8080/api');
    observable.subscribe((data) => {
      console.log(data);
      this.data = data;
    });
    console.log('hi');
  }
}

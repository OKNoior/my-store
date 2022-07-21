import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Oscar';
  age = 36;
  image = 'https://i.pinimg.com/originals/ad/7e/6a/ad7e6a6cdcc499dd52077b4d83e6dd2b.jpg';
  btnDisable = true;
  person ={
    name: 'Oscar',
    age: 36,
    avatar: 'https://i.pinimg.com/originals/ad/7e/6a/ad7e6a6cdcc499dd52077b4d83e6dd2b.jpg'
  }
}

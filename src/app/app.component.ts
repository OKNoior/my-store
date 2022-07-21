import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Oscar';
  age = 36;
  image = 'https://i.pinimg.com/originals/ad/7e/6a/ad7e6a6cdcc499dd52077b4d83e6dd2b.jpg';
  btnDisabled = true;
  person ={
    name: 'Oscar',
    age: 36,
    avatar: 'https://i.pinimg.com/originals/ad/7e/6a/ad7e6a6cdcc499dd52077b4d83e6dd2b.jpg'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element =event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}

import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  Name="";
  Age=0;
  @Output() myEvent = new EventEmitter();
  @Output() AgeEvent = new EventEmitter();


  chg(){
    // console.log(this.Name);
    this.myEvent.emit(this.Name);
    this.AgeEvent.emit(this.Age);

 }    


}

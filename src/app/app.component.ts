import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NameData="";
  AgeData=0;
  students:{name:string,age:number}[] = [];

Add(){
  // if(this.NameData.length<3 && this.AgeData <15  && this.AgeData >44 ){
  let student = {name:this.NameData,age:this.AgeData};
  this.students.push(student);
  console.log(this.students)

}

  title = 'Angular3';
  GetData(data:any){
this.NameData = data;
  }
  GetAge(age:any){
    this.AgeData = age ;
    this.Add();
  }

    
  }

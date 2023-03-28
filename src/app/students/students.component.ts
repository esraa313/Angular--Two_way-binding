import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
 @Input() Name="";
 @Input() Age=0;
 @Input() list:{name:string,age:number}[] = [];
 ;

}

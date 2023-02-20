import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  randomNumber!: number;

  subjectparent:object=[
    {id:1,name: 'Tamil'},
    {id:2,name: 'English'},
    {id:3,name: 'maths'},
    {id:4,name: 'Science'},
    {id:5,name: 'Social'},
  ];
   public onNumberGenerated(randomNumber: number) {
    this.randomNumber = randomNumber;
   }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  @Input() subjectchild: any;
  @Output() private numberGenerated1 = new EventEmitter<number>();
  constructor() {}
  ngOnInit(): void {
    
  }
  public generateNumber(){
    const randomNumber = Math.random();
    this.numberGenerated1.emit(randomNumber);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  bookId: number = 67;

  bookName: string = "thulasi";

  author: string = "Balakumaran";

  bookstatus: string = "Available";

  btnToggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.btnToggle = false;
    }, 2000);
  }

  onToggle() {
    if (this.bookstatus == "Available") {
      this.bookstatus = "Not Available";
    }
    else {
       this.bookstatus = "Available";
       }
  }
}




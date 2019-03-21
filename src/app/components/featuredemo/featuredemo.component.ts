import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featuredemo',
  templateUrl: './featuredemo.component.html',
  // template: '<div><h5>Feature Demo Component</h5></div>' +
  //       '<div>Second Div</div>',
  styleUrls: ['./featuredemo.component.css']
  // styles: ['h5 {color: red;}']
})
export class FeaturedemoComponent implements OnInit {

  done;
  myStyle;
  listFlag: boolean;
  message: string;

  constructor() { }

  ngOnInit() {
    this.done = false;
    this.myStyle = {
      todoDone: this.done
    };
    this.listFlag = true;
    this.message = '';
  }

  btnClicked(event) {
    alert('OUCH!! That Hurt.\nPlease be gentle...');
    console.log(event);
  }

  checked(event) {
    console.log(event);
    this.done = event.target.checked;
    console.log(this.done);
    this.myStyle = {
      todoDone: this.done
    };
  }

  toggleList() {
    this.listFlag = !this.listFlag;
  }
}

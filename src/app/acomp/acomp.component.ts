import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acomp',
  template: `<h2> welcome {{name}}</h2>
            <button (click)="onClick($event)">press</button> {{get}}
            `,
  styles: []
})
export class AcompComponent implements OnInit {
 public name="Aditi";
 public get="";
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    console.log(event);
    this.get='hello people';

  }

  

}

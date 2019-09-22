import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scroll-spy';
  selected = "section2";

  changeSelected(value:string){
    if(value!=this.selected){
      this.selected = value;
    }
  }
}

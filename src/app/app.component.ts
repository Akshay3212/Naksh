import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  
  title = 'Angular16';

  arr:any[] = [];

  Onsubmit(data:any){
      this.arr = data
  }  

}

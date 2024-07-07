import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{
   
  @Input() data:any = '';
  @ContentChild('data')para!: ElementRef;

  ngOnInit(){
    console.log("ngOnInit callded");
 }

 
ngOnChanges(){
  console.log("ngOn Changes Called")  
  console.log(this.data);
}

ngDoCheck(){
  console.log("mgDoCheck Called")
}

ngAfterContentInit(){
    console.log("ngAfterConentInit Called")
}

ngAfterContentChecked(){
  console.log("ngAfterConentCheck Called")
}


}

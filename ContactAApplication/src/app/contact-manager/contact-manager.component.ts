import { Component } from '@angular/core';
import { myContact } from '../models/myContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrl: './contact-manager.component.css'
})
export class ContactManagerComponent {
  
  public loading:boolean = false;
  public Contacts:myContact[]=[];

  constructor(private cantservice:ContactService){
    
  }

 ngOnInit(){
  this.loading=true
  this.cantservice.getAllContact().subscribe((data:any)=>{
    this.Contacts=data;
  })
  this.loading=false;
 }
}

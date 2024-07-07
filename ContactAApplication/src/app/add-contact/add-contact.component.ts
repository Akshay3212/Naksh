import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
    
  groupname:any = ''
  constructor(private serve:ContactService , private route:ActivatedRoute ){
    this.getGN()
  }
  
  getGN(){
    this.serve.getAllGroups().subscribe((res)=>{
      this.groupname = res;
      console.log(res);
    })
  }
}

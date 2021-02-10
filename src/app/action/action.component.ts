import { Component, OnInit } from '@angular/core';
import { ProgradRegService } from '../prograd-reg.service';
import { ProgradregistrationService } from '../progradregistration.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  prograd:any
  constructor(private service:ProgradregistrationService ) { }

  ngOnInit(): void {
    this.service.viewAll().subscribe((data)=>{this.prograd=data
      console.log(data)}
    )
  }
  deletePrograd(id){
    this.service.deleteprograd(id).subscribe((data)=>{
      this.prograd=data
    })
  }

  findUserById(id){
    this.service.getprogradbyid(id).subscribe((data)=>{
      this.prograd=data
      console.log(data)
    })
  }
  
}

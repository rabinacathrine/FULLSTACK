import { Component, OnInit } from '@angular/core';
import { ProgradRegService } from '../prograd-reg.service';
import { ProgradregistrationService } from '../progradregistration.service';
import { Prograds } from '../prograds';

@Component({
  selector: 'app-addptograd',
  templateUrl: './addptograd.component.html',
  styleUrls: ['./addptograd.component.css']
})
export class AddptogradComponent implements OnInit {
  prograds:Prograds = new Prograds(0,"","");
  constructor(private service:ProgradregistrationService) { }

  ngOnInit(): void {
  }
register(){
this.service.addPrograd(this.prograds).subscribe((data)=>{
  console.log(data)
},
(error)=>console.log(error))}
}

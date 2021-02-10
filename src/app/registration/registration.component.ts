import { Component, OnInit } from '@angular/core';
import { ProgradRegService } from '../prograd-reg.service';
import { Prograds } from '../prograds';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  prograds:Prograds = new Prograds(0,"","")
  constructor(private service:ProgradRegService) { }

  ngOnInit(): void {
  }

  registerNow(){
    this.service.addPrograd(this.prograds).subscribe((data)=>
    console.log(data))
  }
}

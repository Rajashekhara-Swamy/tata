import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';


import { from } from 'rxjs';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
//   todydate;
// componentproperty;
d1:FormGroup;
ar=123;

  constructor(private router:Router,private myservice:MyserviceService) { 
this.d1=new FormGroup({
  name:new FormControl()
})
  }
  ngOnInit() {
//     this.todydate=this.myservice.showTodayDate();
//     console.log(this.myservice.serviceproperty);
//     this.myservice.serviceproperty='componet is created';
//     this.componentproperty=this.myservice.serviceproperty;
     

  }
  b(b: any) {
    throw new Error("Method not implemented.");
  }

// a(){
//  this.router.navigate(['village'])
// }
d2(a){
  this.ar=a.value

  console.log(a)
}
}

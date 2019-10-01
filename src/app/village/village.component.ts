import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

//raja=false;
//   employeelist=[
// { "id":11, "name":"raja","place":"banglore"},
//    { "id":12, "name":"basava","place":"raichur"},
//    { "id":13, "name":"malla","place":"bangal"},
//    { "id":4, "name":"chethan","place":"gujarati"},
//    { "id":5, "n   ame":"shiva","place":"hydrabad"}

//   ]
// public  name:string="rajashekhara swamy";
// public deva=false;
sig:FormGroup;
ar
  arr: any;
  public vishnu="hii visnu, how are you"

// todaydate;
// villagecomponentproperty;
// villagecomponent='component created';
  constructor(private router:Router,private myservice:MyserviceService,private http:HttpClient) { 
  // addToCart(product) {
  //   window.alert('Your product has been added to the cart!');
  //   this.myservice.addTomyservice(product);
  //}
  this.sig = new FormGroup({
    name: new FormControl()
 });
 
}
  ngOnInit() {
    this.http.get("https://jvapi.peelpress.com/news").subscribe(data=>{
      console.log(data)
      // this.ar=data['news']
    //  this.arr=data['news'][0].name
      // console.log(this.ar)
      // console.log(this.arr)
    })
    }

  //     this.todaydate = this.myservice.showTodayDate();
  //     this.villagecomponentproperty = this.myservice.serviceproperty;
  //  }
  
// a2(){
// this.router.navigate(['country'])
// }
// add(a){
//   this.ar=a.value
//   console.log(this.ar)
// }
}

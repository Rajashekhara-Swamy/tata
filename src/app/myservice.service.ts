import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  addTomyservice(product: any) {
    throw new Error("Method not implemented.");
  }
serviceproperty='service is created';
  constructor() { }
  showTodayDate(){
    let v=new Date();
    return v;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-distict',
  templateUrl: './distict.component.html',
  styleUrls: ['./distict.component.css']
})
export class DistictComponent implements OnInit {
  [x: string]: any;
  route: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  will() {
    this.router.navigate(['state'])
  }






}



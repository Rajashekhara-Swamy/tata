import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
public val:number;
  constructor() { }

  ngOnInit() {
  }
  su(){
    let a=(this.val>18)?alert("grater"):alert("too young to vote");
    return a
    
    }

}

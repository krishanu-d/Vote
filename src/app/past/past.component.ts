import { Component, OnInit } from '@angular/core';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {
  items : data[];
  constructor() { 
    this.items=PastData;
  }

  ngOnInit(): void {
  }

}


const PastData =[
  {
    year:'2015-16',
    name:'Lok Sabha',
    result:'jBh'
  },
  {
    year:'2016-17',
    name:'abha',
    result:'INJ'
  },
  {
    year:'2017-18',
    name:'Lok Sabha',
    result:'PPO'
  },
  {
    year:'2019-20',
    name:'Lok Sabha',
    result:'KKK'
  },

]


export interface data {
  year: string,
  name: string,
  result: string,
}
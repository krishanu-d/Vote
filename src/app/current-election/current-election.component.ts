import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-election',
  templateUrl: './current-election.component.html',
  styleUrls: ['./current-election.component.scss']
})
export class CurrentElectionComponent implements OnInit {
  items: data[];

  constructor() {
    this.items = PastData;

  }

  ngOnInit(): void {
  }

}

const PastData = [
  {
    year: '2015-16',
    name: 'Lok Sabha',
    result: 'jBh'
  },
  {
    year: '2016-17',
    name: 'abha',
    result: 'INJ'
  },
  {
    year: '2017-18',
    name: 'Lok Sabha',
    result: 'PPO'
  },
  {
    year: '2019-20',
    name: 'Lok Sabha',
    result: 'KKK'
  },

]


export interface data {
  year: string,
  name: string,
  result: string,
}

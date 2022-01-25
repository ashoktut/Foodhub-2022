import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  // pass 2 input properties to restaurant detail

  @Input() data: any;
  @Input() isLoading;
  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

}

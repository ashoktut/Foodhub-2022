/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = { // model object and its attributes
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };


  isLoading: boolean;
  query: any;
  allRestaurants: any[] = [ //restaurant object and its attributes
    {
      cover: 'assets/imgs/1.jpg',
      name: 'StayFit',
      shortName: 'stayfit',
      cuisines: [ //cusines array
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      // distance: 2.5,
      price: 100
    },

    {
      cover: 'assets/imgs/2.jpg',
      name: 'StayFit1',
      shortName: 'stayfit1',
      cuisines: [ //cusines array
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      // distance: 2.5,
      price: 100
    },

    {
      cover: 'assets/imgs/3.jpg',
      name: 'StayFit2',
      shortName: 'stayfit3',
      cuisines: [ //cuisines array
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      // distance: 2.5,
      price: 100
    },
  ];

  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = await  this.allRestaurants.filter((element: any) => {
          return element.shortName.includes(this.query);
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 3000);
    }
  }

}

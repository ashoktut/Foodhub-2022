import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    banners: any[] = [];
    restaurants: any[] = [];
    isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        {banner: 'assets/imgs/1.jpg'},
        {banner: 'assets/imgs/2.jpg'},
        {banner: 'assets/imgs/3.jpg'},
      ];
      this.restaurants = [ //restaurant object and its attributes
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
          distance: 2.5,
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
          distance: 2.5,
          price: 100
        },

        {
          cover: 'assets/imgs/3.jpg',
          name: 'StayFit2',
          shortName: 'stayfit3',
          cuisines: [ //cusines array
            'Italian',
            'Mexican'
          ],
          rating: 5,
          deliveryTime: 25,
          distance: 2.5,
          price: 100
        },
      ];
      this.isLoading = false;
    }, 3000);

  }

}

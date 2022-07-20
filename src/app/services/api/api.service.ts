import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  banners = [
    {banner: 'assets/imgs/1.jpg'},
    {banner: 'assets/imgs/2.jpg'},
    {banner: 'assets/imgs/3.jpg'},
  ];
  restaurants = [ //restaurant object and its attributes
    {
      uid: 'sdu8fdf',
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
      uid: 'jfl8f',
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
      uid: 'nwefvi',
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

  allRestaurants = [ //restaurant object and its attributes
  {
    uid: 'sdu8fdf',
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
    uid: 'jfl8f',
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
    uid: 'nwefvi',
    cover: 'assets/imgs/3.jpg',
    name: 'StayFit2',
    shortName: 'stayfit3',
    cuisines: [ //cusines array
      'Italian',
      'Mexican'
    ],
    rating: 5,
    deliveryTime: 25,
    // distance: 2.5,
    price: 100
  },
];

restaurants1 = [ // restaurant object and its attributes
{
  uid: 'sdu8fdf',
  cover: 'assets/imgs/1.jpg',
  name: 'StayFit',
  shortName: 'stayfit',
  address: 'Karol Bagh, New Delhi',
  cuisines: [ // cusines array
    'Italian',
    'Mexican'
  ],
  rating: 5,
  deliveryTime: 25,
  distance: 2.5,
  price: 100
},

{
  uid: 'jfl8f',
  cover: 'assets/imgs/2.jpg',
  name: 'StayFit1',
  shortName: 'stayfit1',
  address: 'Karol Bagh, New Delhi',
  cuisines: [ // cusines array
    'Italian',
    'Mexican'
  ],
  rating: 5,
  deliveryTime: 25,
  distance: 2.5,
  price: 100
},

{
  uid: 'nwefvi',
  cover: 'assets/imgs/3.jpg',
  name: 'StayFit2',
  shortName: 'stayfit3',
  address: 'Karol Bagh, New Delhi',
  cuisines: [ // cusines array
    'Italian',
    'Mexican'
  ],
  rating: 5,
  deliveryTime: 25,
  distance: 2.5,
  price: 100
},
];

categories: any[] = [
{
  id: 'e00',
  name: 'Italian',
  uid: 'sdu8fdf'
},
{
  id: 'e0',
  name: 'Mexican',
  uid: 'sdu8fdf'
},
];

allItems = [
{
    category_id: 'e00',
    cover: 'assets/imgs/pizza.jpg',
    desc: 'Great in taste',
    id: 'i1',
    name: 'Pizza',
    price: 120,
    rating: 0,
    status: true,
    uid: 'sdu8fdf',
    variation: false,
    veg: false
},
{
    category_id: 'e0',
    cover: 'assets/imgs/salad.jpg',
    desc: 'Great in taste',
    id: 'i2',
    name: 'Caprese Salad',
    price: 200,
    rating: 0,
    status: true,
    uid: 'sdu8fdf', // Restaurant id
    variation: false,
    veg: true
},
{
    category_id: 'e00',
    cover: 'assets/imgs/pasta.jpg',
    desc: 'Great in taste',
    id: 'i3',
    name: 'Pasta',
    price: 150,
    rating: 0,
    status: true,
    uid: 'sdu8fdf',
    variation: false,
    veg: false
},
];

  constructor() { }
}

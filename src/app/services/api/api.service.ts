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

addresses: any[] = [
  {address: "Oriental Plaza, Fordsburg", house:"29 Zeet Street", id: "7f8sfe", landmark: "OP", lat: 26.1830738, lng: 91.7404976999999, title: "Home", user_id: "1"},
  {address: "Golf Course, Woodmead", house:"92 Benz Street", id: "546n4bbf", landmark: "Corner", lat: 22.1073837, lng: 86.740497326, title: "Work", user_id: "1"},
  {address: "Sun City, Rustenburg", house:"72 Corlett Drive", id: "37hb5bg", landmark: "Resort", lat: 37.3734575, lng: 15.74326784, title: "Other", user_id: "1"}
];

orders: any[] = [
  {
    address: {address: "Indira Nagar Rd, Borsojai, Basistha 781029, India", house: "dsgd", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 26.108991978867923, lng: 91.79069981213378, title: "yui", user_id: "UA5JWxgjDOYgfXe92H0pFHwulTz2" },
    deliveryCharge: 20,
    grandTotal: "540.00",
    id: "5aG0RsPuze8NX00B7uRP",
    order: [
      {category_id: "e10", cover: "assets/imgs/baha.jpg", desc: "Great in taste", id: "i32", name: "Bahamas", price: 270, quantity: 1, rating: 0, status: true, uid: "r5", variation: false, veg: false},
      {category_id: "e10", cover: "assets/imgs/mofo.jpg", desc: "Great in taste", id: "i33", name: "Mofongo", price: 250, quantity: 1, rating: 0, status: true, uid: "r5",variation: false, veg: true}
    ],
    paid: "COD",
    restaurant: {address: "Christan Basti, India",  city: "909090567", closeTime: "21:00", cover: "", cuisines: ["Caribbean food", "North Indian", "Vietnamese"], delivery_time: 25, description: "dd", email: "DosaPlaza@gmail.com", latitude: 26.1286243, longitude: 91.8012675, id: "r5", isClose: true, name: "DosaPlaza", openTime: "07:00", phone: 6619563867, price: 27, rating: 4.7, short_name: "stayfit", status: "open", totalRating: 13},
    restaurant_id: "r5",
    status: "created",
    time: "Jul 6, 2020 11:44 AM",
    total: "520.00",
    user_id: "1"
  },
  {
    address: {address: "Indira Nagar Rd, Borsojai, Basistha 781029, India", house: "dsgd", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 26.108991978867923, lng: 91.79069981213378, title: "yui", user_id: "UA5JWxgjDOYgfXe92H0pFHwulTz2" },
    deliveryCharge: 20,
    grandTotal: "440.00",
    id: "5aG0RsPuze8NX00B7uR1",
    order: [
      {category_id: "e00", cover: "assets/imgs/pizza.jpg", desc: "Great in taste", id: "i1", name: "Pizza", price: 120, quantity: 1, rating: 0, status: true, uid: "r1", variation: false, veg: false},
      {category_id: "e00", cover: "assets/imgs/pasta.jpg", desc: "Great in taste", id: "i3", name: "Pasta", price: 150, quantity: 2, rating: 0, status: true, uid: "r1", variation: false, veg: false}
    ],
    paid: "COD",
    restaurant: {address: "Beltola Tiniali, India", city: "909090271", closeTime: "20:00", cover: "assets/imgs/restaurant-1.jpg", cuisines: ["Italian", "Mexican"], delivery_time: 25, description: "dd", email: "stay@fit.com", id: "r1", isClose: true, latitude: 26.1286243, longitude: 91.8012675, name: "Stayfit", openTime: "08:00", phone: 6786745745, price: 25, rating: 0, short_name: "stayfit", status: "open", totalRating: 0},    restaurant_id: "r1",
    status: "Delivered",
    time: "Jul 7, 2020 11:44 AM",
    total: "420.00",
    user_id: "1"
  },
];

  constructor() { }

}

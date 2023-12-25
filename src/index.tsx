import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const data = [{
  'id': '6faa9038-2300-4fd3-ae2c-2fd37e51eeda',
  'title': 'Tile House',
  'type': 'hotel',
  'price': 336,
  'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.868610000000004,
    'longitude': 2.342499,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 4.5
},
{
  'id': '287c1b1b-a501-4e9b-bebd-9b0656b2989e',
  'title': 'Amazing and Extremely Central Flat',
  'type': 'house',
  'price': 899,
  'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.858610000000006,
    'longitude': 2.330499,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 4.5
},
{
  'id': '1767f6d3-2145-4fb8-8b24-8442dbf8d81d',
  'title': 'The Pondhouse - A Magical Place',
  'type': 'house',
  'price': 728,
  'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.834610000000005,
    'longitude': 2.335499,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': true,
  'rating': 1.3
},
// пропорции
// 1.3 - 5
// x  - 100

// 1.3 * 20 = 26 %

{
  'id': '324a4e42-bf74-4489-b247-98c9f8aebcde',
  'title': 'Penthouse, 4-5 rooms + 5 balconies',
  'type': 'apartment',
  'price': 138,
  'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.85761,
    'longitude': 2.358499,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 1.1
},
{
  'id': '26863262-e76b-4368-b837-0c516c2b5fc4',
  'title': 'The house among olive ',
  'type': 'apartment',
  'price': 221,
  'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.87561,
    'longitude': 2.375499,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': true,
  'rating': 1.2
}
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={data} />
  </React.StrictMode>
);

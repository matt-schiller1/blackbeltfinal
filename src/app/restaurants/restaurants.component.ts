import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Restaurant } from '../restaurant.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  editRestaurant: any;
  rest;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.editRestaurant = { name: '', cuisine: '' };
    this.getRestaurantsFromService();
  }

  getRestaurantsFromService() {
    this.httpService.getRestaurants().subscribe(restaurants => {
      console.log('list of restaurants!', restaurants);
      this.restaurants = restaurants;

    });
  }

  showRestaurantDetails(restaurantID) {
    console.log(restaurantID);
    let observable = this.httpService.getSingleRest(restaurantID);
    observable.subscribe(data => {
      console.log("got the restaurant", data)
      this.rest = data;
    })
  }

  onDelete(restaurant: Restaurant) {
    this.httpService.deleteRestaurant(restaurant._id).subscribe(data => {
      this.restaurants = this.restaurants.filter(currentRestaurant => currentRestaurant._id !== data._id);
    });
  }

  invoked(event) {
    console.log('invoked', event);
    this.restaurants = this.restaurants.map(currentRestaurant => currentRestaurant._id === event._id ? event : currentRestaurant);
  }
}

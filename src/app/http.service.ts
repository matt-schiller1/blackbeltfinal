import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/restaurants');
  }

  addRestaurant(newRestaurant) {
    return this.http.post('/restaurants/new', newRestaurant);
  }

  addReview(restaurantID, newReview) {
    return this.http.post('/restaurants/' + restaurantID + '/review', newReview);
  }
  getRestaurant(restaurantID): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/' + restaurantID);
  }

  getSingleRest(restaurantID): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/restaurants/' + restaurantID);
  }

  updateRestaurant(editRestaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`/update/${editRestaurant._id}`, editRestaurant);
  }

  deleteRestaurant(restaurantID: string): Observable<Restaurant> {
    console.log('deleting' + restaurantID);
    return this.http.delete<Restaurant>(`/remove/${restaurantID}`);
  }

}

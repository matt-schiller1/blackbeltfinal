import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  restaurantID: any;
  reviews: any;
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => console.log(`The parent params: ${params}`));
    this.restaurantID = this.route.snapshot.paramMap.get('id');
    console.log(this.restaurantID);
    this.displayRestaurant();
  }

  displayRestaurant() {
    this.httpService.getRestaurant(this.restaurantID).subscribe(data => {
      console.log(data);
      this.reviews = data;
    })
  }

}

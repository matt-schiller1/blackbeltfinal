import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  newReview: any;
  restaurantID: any;
  errors: string[];
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => console.log(`The parent params: ${params}`));
    this.restaurantID = this.route.snapshot.paramMap.get('id');
    console.log(this.restaurantID);
    this.newReview = { name: '', rating: '', review: '', restID: this.restaurantID };
  }

  addReview(restaurantID, newReview) {
    this.httpService.addReview(restaurantID, this.newReview).subscribe(data => {
      console.log('adding rating', data);
      this.router.navigate(['/restaurants/' + restaurantID]);
    },
      error => {
        this.errors = error.error;
      }
    );
  }
}

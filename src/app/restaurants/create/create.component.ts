import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newRestaurant: {};
  errors: string[];
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newRestaurant = { name: '', cuisine: '' }
  }

  addRestaurant() {
    console.log("here!")
    this.httpService.addRestaurant(this.newRestaurant).subscribe(data => {
      this.router.navigate(['/restaurants']);
    },
      error => {
        this.errors = error.error;
      }
    )
  }
  onCancel() {
    this.router.navigate(['/restaurants']);
  }
}


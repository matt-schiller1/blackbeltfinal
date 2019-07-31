import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { Restaurant } from '../../restaurant.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() rest: any;
  editRestaurant: any;
  errors: any;
  @Output() myEvent = new EventEmitter();
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.editRestaurant = { name: '', cuisine: '' };
  }

  editThisRestaurant(editRestaurant: Restaurant) {
    this.httpService.updateRestaurant(editRestaurant).subscribe(data => {
      console.log('successfully updated');
      this.myEvent.emit(editRestaurant);
      this.router.navigate(['/restaurants']);

    },
      error => {
        console.log('some error');
        this.errors = error.error;
      })
  }
  triggerEvent() {

  }

}

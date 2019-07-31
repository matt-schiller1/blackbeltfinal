import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';
import { CreateComponent } from './restaurants/create/create.component';
import { EditComponent } from './restaurants/edit/edit.component';
import { DisplayComponent } from './restaurants/display/display.component'

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ReviewsComponent,
    CreateComponent,
    EditComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

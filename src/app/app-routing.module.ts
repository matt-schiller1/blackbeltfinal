import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EditComponent } from './restaurants/edit/edit.component';
import { CreateComponent } from './restaurants/create/create.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';
import { DisplayComponent } from './restaurants/display/display.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/restaurants',
  },
  {
    path: 'restaurants',
    children: [
      {
        path: '',
        component: RestaurantsComponent,
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: CreateComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: DisplayComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        pathMatch: 'full',
      },
      {
        path: 'review/:id',
        component: ReviewsComponent,
        pathMatch: 'full',
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

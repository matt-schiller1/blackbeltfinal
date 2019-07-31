export interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  reviews: Array<Review>;
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  review: string;
  restID: string;
}

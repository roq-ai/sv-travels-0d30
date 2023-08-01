import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RatingInterface {
  id?: string;
  rating: number;
  rider_id?: string;
  driver_id?: string;
  created_at?: any;
  updated_at?: any;

  user_rating_rider_idTouser?: UserInterface;
  user_rating_driver_idTouser?: UserInterface;
  _count?: {};
}

export interface RatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  rider_id?: string;
  driver_id?: string;
}

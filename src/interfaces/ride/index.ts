import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RideInterface {
  id?: string;
  pickup_location: string;
  dropoff_location: string;
  ride_option: string;
  rider_id?: string;
  driver_id?: string;
  created_at?: any;
  updated_at?: any;

  user_ride_rider_idTouser?: UserInterface;
  user_ride_driver_idTouser?: UserInterface;
  _count?: {};
}

export interface RideGetQueryInterface extends GetQueryInterface {
  id?: string;
  pickup_location?: string;
  dropoff_location?: string;
  ride_option?: string;
  rider_id?: string;
  driver_id?: string;
}

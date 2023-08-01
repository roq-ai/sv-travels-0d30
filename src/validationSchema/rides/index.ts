import * as yup from 'yup';

export const rideValidationSchema = yup.object().shape({
  pickup_location: yup.string().required(),
  dropoff_location: yup.string().required(),
  ride_option: yup.string().required(),
  rider_id: yup.string().nullable(),
  driver_id: yup.string().nullable(),
});

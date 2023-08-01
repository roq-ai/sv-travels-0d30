import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  rider_id: yup.string().nullable(),
  driver_id: yup.string().nullable(),
});
